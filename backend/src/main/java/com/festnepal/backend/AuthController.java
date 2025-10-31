package com.festnepal.backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private Map<String, String> otpStore = new HashMap<>();

    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestBody Map<String, String> request) {
        String phoneNumber = request.get("phoneNumber");
        if (phoneNumber == null || phoneNumber.isEmpty()) {
            return ResponseEntity.badRequest().body("Phone number is required");
        }
        try {
            User user = userRepository.findByPhoneNumber(phoneNumber);
            if (user == null) {
                return ResponseEntity.badRequest().body("User not registered");
            }
        } catch (Exception e) {
            System.out.println("Database error in sendOtp: " + e.getMessage());
            return ResponseEntity.status(500).body("Internal server error");
        }
        String otp = generateOtp();
        otpStore.put(phoneNumber, otp);
        System.out.println("OTP for " + phoneNumber + ": " + otp);
        return ResponseEntity.ok("OTP sent to terminal");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody Map<String, String> request) {
        String phoneNumber = request.get("phoneNumber");
        String otp = request.get("otp");
        if (phoneNumber == null || otp == null) {
            return ResponseEntity.badRequest().body("Phone number and OTP are required");
        }
        try {
            User user = userRepository.findByPhoneNumber(phoneNumber);
            if (user == null) {
                return ResponseEntity.status(401).body("User not found");
            }
        } catch (Exception e) {
            System.out.println("Database error in verifyOtp: " + e.getMessage());
            return ResponseEntity.status(500).body("Internal server error");
        }
        String storedOtp = otpStore.get(phoneNumber);
        if (storedOtp != null && storedOtp.equals(otp)) {
            otpStore.remove(phoneNumber);
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid OTP");
        }
    }

    @GetMapping("/signup")
    public ResponseEntity<String> getSignupInfo() {
        return ResponseEntity
                .ok("Signup endpoint. Use POST to register with required fields: phoneNumber, name, email.");
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest request) {
        String phoneNumber = request.getPhoneNumber();
        String name = request.getName();
        String email = request.getEmail();
        if (phoneNumber == null || name == null || email == null) {
            return ResponseEntity.badRequest().body("All fields are required");
        }
        try {
            User existingUser = userRepository.findByPhoneNumber(phoneNumber);
            if (existingUser != null) {
                return ResponseEntity.badRequest().body("User already exists");
            }
            User user = new User();
            user.setPhoneNumber(phoneNumber);
            user.setName(name);
            user.setEmail(email);
            userRepository.save(user);
        } catch (Exception e) {
            System.out.println("Database error in signup: " + e.getMessage());
            return ResponseEntity.status(500).body("Internal server error");
        }
        return ResponseEntity.ok("Signup successful");
    }

    private String generateOtp() {
        Random random = new Random();
        return String.format("%06d", random.nextInt(999999));
    }

    static class SignupRequest {
        private String phoneNumber;
        private String name;
        private String email;

        public String getPhoneNumber() {
            return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }
}
