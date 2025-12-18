package com.festnepal.backend.config;

import com.festnepal.backend.model.Festival;
import com.festnepal.backend.service.FestivalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private FestivalService festivalService;

    @Override
    public void run(String... args) throws Exception {
        if (festivalService.count() == 0) {
            List<Festival> festivals = Arrays.asList(
                    new Festival("Dashain Festival Celebration", "Oct 15-24, 2025", "Kathmandu Valley", 500,
                            "festivalDashain"),
                    new Festival("Holi Festival", "Oct 15-24, 2025", "Kathmandu Valley", 500, "festivalHoli"),
                    new Festival("Tihar Festival", "Oct 10-20, 2025", "Kathmandu Valley", 500, "festival3"),
                    new Festival("Buddha Jayanti", "Oct 15-24, 2025", "Kathmandu Valley", 500, "festival4"),
                    new Festival("Indra Jatra", "Oct 15-24, 2025", "Kathmandu Valley", 500, "festival5"),
                    new Festival("Bisket Jatra", "Oct 15-24, 2025", "Kathmandu Valley", 500, "festival6"));
            festivalService.saveAll(festivals);
            System.out.println("Seeded initial festival data.");
        }
    }
}
