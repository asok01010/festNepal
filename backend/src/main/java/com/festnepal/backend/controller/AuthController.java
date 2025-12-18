package com.festnepal.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Map;
import java.util.Random;

import com.festnepal.backend.model.User;
import com.festnepal.backend.model.OTP;
import com.festnepal.backend.repository.UserRepository;
import com.festnepal.backend.repository.OTPRepository;
import com.festnepal.backend.service.EmailService;
import com.festnepal.backend.service.EmailTemplateBuilder;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private EmailService emailService;

    @Autowired
    private EmailTemplateBuilder emailTemplateBuilder;

    // -------------------
    // Send OTP by Email (Forgot Password / Verification)
    // -------------------
    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not registered");
        }

        String otp = generateOtp();
        OTP otpEntity = new OTP(user, otp);
        otpRepository.save(otpEntity);

        String userName = user.getName() != null ? user.getName() : "User";

        try {
            String html = emailTemplateBuilder.buildOtpEmail(otp, userName);
            emailService.sendHtmlEmail(email, "Your FestNepal OTP Code", html);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to send OTP email");
        }

        return ResponseEntity.ok("OTP sent successfully to " + email);
    }

    // -------------------
    // Verify OTP
    // -------------------
    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String otp = request.get("otp");

        if (email == null || otp == null || email.isEmpty() || otp.isEmpty()) {
            return ResponseEntity.badRequest().body("Email and OTP are required");
        }

        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(401).body("User not found");
        }

        OTP latestOtp = otpRepository.findTopByUserOrderByCreatedAtDesc(user).orElse(null);

        if (latestOtp != null && latestOtp.getOtp().equals(otp)) {
            otpRepository.deleteByUser(user);
            return ResponseEntity.ok("OTP verified successfully");
        } else {
            return ResponseEntity.status(401).body("Invalid OTP");
        }
    }

    // -------------------
    // Signup
    // -------------------
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest request) {
        String name = request.getName();
        String email = request.getEmail();
        String password = request.getPassword();

        if (name == null || email == null || password == null ||
                name.isEmpty() || email.isEmpty() || password.isEmpty()) {
            return ResponseEntity.badRequest().body("All fields (name, email, password) are required");
        }

        try {
            String checkQuery = "SELECT COUNT(*) FROM user WHERE email = ?";
            Integer count = jdbcTemplate.queryForObject(checkQuery, Integer.class, email);
            if (count != null && count > 0) {
                return ResponseEntity.badRequest().body("User with this email already exists");
            }

            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            String hashedPassword = encoder.encode(password);

            String insertQuery = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
            jdbcTemplate.update(insertQuery, name, email, hashedPassword);

            Long generatedId = jdbcTemplate.queryForObject("SELECT LAST_INSERT_ID()", Long.class);
            return ResponseEntity.ok("Signup successful: id=" + generatedId);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal server error");
        }
    }

    // -------------------
    // Login (Send OTP)
    // -------------------
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        String email = request.getEmail();
        String password = request.getPassword();

        if (email == null || password == null || email.isEmpty() || password.isEmpty()) {
            return ResponseEntity.badRequest().body("Email and password are required");
        }

        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (encoder.matches(password, user.getPassword())) {
            String otp = generateOtp();
            OTP otpEntity = new OTP(user, otp);
            otpRepository.save(otpEntity);

            try {
                String html = emailTemplateBuilder.buildOtpEmail(otp, user.getName());
                emailService.sendHtmlEmail(email, "Your FestNepal OTP Code", html);
            } catch (Exception e) {
                e.printStackTrace();
                return ResponseEntity.status(500).body("Failed to send OTP email");
            }

            return ResponseEntity.ok("OTP sent successfully to " + email);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    // -------------------
    // Resend OTP
    // -------------------
    @PostMapping("/resend-otp")
    public ResponseEntity<String> resendOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(401).body("User not found");
        }

        String otp = generateOtp();
        OTP otpEntity = new OTP(user, otp);
        otpRepository.save(otpEntity);

        try {
            String html = emailTemplateBuilder.buildOtpEmail(otp, user.getName());
            emailService.sendHtmlEmail(email, "Your FestNepal OTP Code (Resent)", html);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to send OTP email");
        }

        return ResponseEntity.ok("OTP resent successfully to " + email);
    }

    // -------------------
    // Verify Login OTP
    // -------------------
    @PostMapping("/verify-login-otp")
    public ResponseEntity<String> verifyLoginOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String otp = request.get("otp");

        if (email == null || otp == null || email.isEmpty() || otp.isEmpty()) {
            return ResponseEntity.badRequest().body("Email and OTP are required");
        }

        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(401).body("User not found");
        }

        OTP latestOtp = otpRepository.findTopByUserOrderByCreatedAtDesc(user).orElse(null);

        if (latestOtp != null && latestOtp.getOtp().equals(otp)) {
            otpRepository.deleteByUser(user);
            return ResponseEntity.ok("{\"message\": \"Login successful\", \"name\": \"" + user.getName() + "\"}");
        } else {
            return ResponseEntity.status(401).body("Invalid OTP");
        }
    }

    // -------------------
    // Utility: Generate OTP
    // -------------------
    private String generateOtp() {
        Random random = new Random();
        return String.format("%06d", random.nextInt(999999));
    }

    // -------------------
    // DTOs
    // -------------------
    static class SignupRequest {
        private String name;
        private String email;
        private String password;

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

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    static class LoginRequest {
        private String email;
        private String password;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
