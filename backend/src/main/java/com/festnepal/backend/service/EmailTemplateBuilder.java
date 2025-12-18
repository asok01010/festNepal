package com.festnepal.backend.service;

import org.springframework.stereotype.Component;

@Component
public class EmailTemplateBuilder {

  // 🔹 OTP Email Template (with name)
  public String buildOtpEmail(String otp, String name) {
    return """
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
            <div style="max-width: 500px; margin: auto; background: white; padding: 20px; border-radius: 10px;">
              <h2 style="color: #4CAF50; text-align: center;">Your OTP Code</h2>
              <p style="font-size: 16px;">Hello %s,</p>
              <p style="font-size: 16px;">Use the following One-Time Password (OTP) to verify your account:</p>
              <div style="font-size: 32px; font-weight: bold; color: #4CAF50; text-align: center;">%s</div>
              <p style="margin-top: 20px; font-size: 14px; color: #555;">
                This code will expire in 1 minutes. Please do not share it with anyone.
              </p>
              <hr>
              <p style="text-align: center; font-size: 12px; color: #aaa;">
                &copy; 2025 FestNepal. All rights reserved.
              </p>
            </div>
          </body>
        </html>
        """.formatted(name, otp);
  }

  // 🔹 Forgot Password Email Template
  public String buildForgotPasswordEmail(String resetLink, String name) {
    return """
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
            <div style="max-width: 500px; margin: auto; background: white; padding: 20px; border-radius: 10px;">
              <h2 style="color: #4CAF50; text-align: center;">Reset Your Password</h2>
              <p style="font-size: 16px;">Hello %s,</p>
              <p style="font-size: 16px;">We received a request to reset your password. Click below:</p>
              <div style="text-align: center; margin: 30px;">
                <a href="%s"
                   style="background-color: #4CAF50; color: white; padding: 12px 24px;
                          text-decoration: none; border-radius: 6px; font-size: 16px;">
                  Reset Password
                </a>
              </div>
              <p style="font-size: 14px; color: #555;">
                If you didn’t request this, please ignore this email.
              </p>
              <hr>
              <p style="text-align: center; font-size: 12px; color: #aaa;">
                &copy; 2025 FestNepal. All rights reserved.
              </p>
            </div>
          </body>
        </html>
        """.formatted(name, resetLink);
  }
}
