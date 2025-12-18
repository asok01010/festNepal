package com.festnepal.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "festivals")
public class Festival {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String date;
    private String location;
    private int attendees;
    private String imageClass;

    public Festival() {
    }

    public Festival(String title, String date, String location, int attendees, String imageClass) {
        this.title = title;
        this.date = date;
        this.location = location;
        this.attendees = attendees;
        this.imageClass = imageClass;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getAttendees() {
        return attendees;
    }

    public void setAttendees(int attendees) {
        this.attendees = attendees;
    }

    public String getImageClass() {
        return imageClass;
    }

    public void setImageClass(String imageClass) {
        this.imageClass = imageClass;
    }
}
