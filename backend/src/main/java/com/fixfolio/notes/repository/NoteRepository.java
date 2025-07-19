package com.fixfolio.notes.repository;

import com.fixfolio.notes.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends MongoRepository<Note, String> {
    // Custom query methods can be added here
    List<Note> findByUsername(String username);
} 