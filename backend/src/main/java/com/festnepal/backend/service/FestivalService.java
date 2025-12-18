package com.festnepal.backend.service;

import com.festnepal.backend.model.Festival;
import com.festnepal.backend.repository.FestivalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FestivalService {

    @Autowired
    private FestivalRepository festivalRepository;

    public List<Festival> getAllFestivals() {
        return festivalRepository.findAll();
    }

    public List<Festival> searchFestivals(String query) {
        return festivalRepository.findByTitleContainingIgnoreCaseOrLocationContainingIgnoreCase(query, query);
    }

    public Festival saveFestival(Festival festival) {
        return festivalRepository.save(festival);
    }

    public long count() {
        return festivalRepository.count();
    }

    public void saveAll(List<Festival> festivals) {
        festivalRepository.saveAll(festivals);
    }
}
