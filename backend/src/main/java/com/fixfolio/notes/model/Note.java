package com.fixfolio.notes.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "notes")
public class Note {
    @Id
    private String id;
    private String title;
    private String description;
    private List<String> tags;
    private String code;
    private String date;
    private String username; // The username of the note's owner
} 