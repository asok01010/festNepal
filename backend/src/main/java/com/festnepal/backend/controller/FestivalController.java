package com.festnepal.backend.controller;

import com.festnepal.backend.model.Festival;
import com.festnepal.backend.service.FestivalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/festivals")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend access
public class FestivalController {

    @Autowired
    private FestivalService festivalService;

    @GetMapping
    public List<Festival> getAllFestivals() {
        return festivalService.getAllFestivals();
    }

    @GetMapping("/search")
    public List<Festival> searchFestivals(@RequestParam String query) {
        return festivalService.searchFestivals(query);
    }
}
