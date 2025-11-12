package com.festnepal.backend.repository;

import com.festnepal.backend.model.OTP;
import com.festnepal.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.List;

public interface OTPRepository extends JpaRepository<OTP, Long> {

    // Get the latest OTP for a specific user
    Optional<OTP> findTopByUserOrderByCreatedAtDesc(User user);

    // Delete all OTPs for a user
    @Transactional
    void deleteByUser(User user);

    // Optional: find all OTPs for a user (if you need history)
    List<OTP> findByUserOrderByCreatedAtDesc(User user);
}
