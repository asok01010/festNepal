package com.festnepal.backend.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.lang.NonNull;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    /**
     * Send a simple HTML email (for OTP or password reset)
     */
    public void sendHtmlEmail(@NonNull String to, @NonNull String subject, @NonNull String htmlContent) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, "utf-8");

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlContent, true); // true enables HTML

            mailSender.send(message);
            System.out.println("✅ Email sent successfully to: " + to);

        } catch (MessagingException e) {
            System.err.println("❌ Failed to send email: " + e.getMessage());
            throw new RuntimeException("Failed to send email", e);
        }
    }
}
