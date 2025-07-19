package com.fixfolio.notes.controller;

import com.fixfolio.notes.model.Note;
import com.fixfolio.notes.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.security.core.context.SecurityContextHolder;
import com.fixfolio.notes.security.JwtUtil;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173") // Adjust for your frontend port
public class NoteController {
    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private String getEmailFromContext() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @GetMapping
    public List<Note> getNotes(@RequestParam(required = false) String filter,
                               @RequestParam(required = false) String search) {
        String email = getEmailFromContext();
        List<Note> notes = noteRepository.findByUsername(email); // username field now stores email
        if (filter != null) {
            LocalDate today = LocalDate.now();
            if (filter.equals("today")) {
                notes = notes.stream().filter(n -> {
                    if (n.getDate() == null) return false;
                    LocalDate noteDate = LocalDate.parse(n.getDate().substring(0, 10));
                    return noteDate.equals(today);
                }).collect(Collectors.toList());
            } else if (filter.equals("week")) {
                LocalDate weekAgo = today.minusDays(6);
                notes = notes.stream().filter(n -> {
                    if (n.getDate() == null) return false;
                    LocalDate noteDate = LocalDate.parse(n.getDate().substring(0, 10));
                    return !noteDate.isBefore(weekAgo);
                }).collect(Collectors.toList());
            } else if (filter.equals("code")) {
                notes = notes.stream().filter(n -> n.getCode() != null && !n.getCode().isBlank()).collect(Collectors.toList());
            }
        }
        if (search != null && !search.isBlank()) {
            String s = search.toLowerCase();
            notes = notes.stream().filter(n ->
                (n.getTitle() != null && n.getTitle().toLowerCase().contains(s)) ||
                (n.getDescription() != null && n.getDescription().toLowerCase().contains(s)) ||
                (n.getTags() != null && n.getTags().stream().anyMatch(tag -> tag.toLowerCase().contains(s))) ||
                (n.getCode() != null && n.getCode().toLowerCase().contains(s))
            ).collect(Collectors.toList());
        }
        return notes;
    }

    @GetMapping("/{id}")
    public Optional<Note> getNote(@PathVariable String id) {
        String email = getEmailFromContext();
        Optional<Note> note = noteRepository.findById(id);
        return note.filter(n -> n.getUsername().equals(email));
    }

    @PostMapping
    public Note createNote(@RequestBody Note note) {
        String email = getEmailFromContext();
        note.setId(null); // Let MongoDB generate the ID
        note.setUsername(email); // username field now stores email
        return noteRepository.save(note);
    }

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable String id, @RequestBody Note note) {
        String email = getEmailFromContext();
        note.setId(id);
        note.setUsername(email);
        return noteRepository.save(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable String id) {
        String email = getEmailFromContext();
        Optional<Note> note = noteRepository.findById(id);
        note.filter(n -> n.getUsername().equals(email)).ifPresent(n -> noteRepository.deleteById(id));
    }
} 