package com.fixfolio.notes.controller;

import com.fixfolio.notes.model.User;
import com.fixfolio.notes.repository.UserRepository;
import com.fixfolio.notes.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        try {
            if (user.getUsername() == null || user.getEmail() == null || user.getPassword() == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "Name, email, and password are required"));
            }
            String email = user.getEmail();
            if (email == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "Email is required"));
            }
            email = email.trim().toLowerCase();
            user.setEmail(email);
            if (userRepository.findByUsername(user.getUsername()).isPresent()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Username already exists"));
            }
            if (userRepository.findByEmail(email).isPresent()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Email already exists"));
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            String token = jwtUtil.generateTokenWithEmail(email);
            // Return a user object (excluding password)
            Map<String, Object> userObj = Map.of(
                "username", user.getUsername(),
                "email", email
            );
            return ResponseEntity.ok(Map.of("token", token, "user", userObj));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "Internal server error"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> req) {
        String email = req.get("email");
        String password = req.get("password");
        if (email == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email and password are required"));
        }
        email = email.trim().toLowerCase();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty() || !passwordEncoder.matches(password, userOpt.get().getPassword())) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
        }
        String token = jwtUtil.generateTokenWithEmail(email);
        User user = userOpt.get();
        Map<String, Object> userObj = Map.of(
            "username", user.getUsername(),
            "email", email
        );
        return ResponseEntity.ok(Map.of("token", token, "user", userObj));
    }
} 