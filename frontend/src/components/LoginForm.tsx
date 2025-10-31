import { useState } from "react";
import type { FormEvent } from "react";
import * as React from "react";
import axios from "axios";
import "./LoginForm.css";

/**
 * LoginForm component handles OTP-based login using phone number.
 */
const LoginForm: React.FC = () => {
  // State for phone number input
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  // State for OTP input
  const [otp, setOtp] = useState<string>("");
  // State for displaying messages to the user
  const [message, setMessage] = useState<string>("");
  // State for form errors
  const [errors, setErrors] = useState<{ phoneNumber?: string; otp?: string }>({});
  // State to track if OTP has been sent
  const [otpSent, setOtpSent] = useState<boolean>(false);

  /**
   * Validates the form inputs.
   * @returns true if valid, false otherwise.
   */
  const validate = (): boolean => {
    const newErrors: { phoneNumber?: string; otp?: string } = {};
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (otpSent && !otp.trim()) {
      newErrors.otp = "OTP is required";
    } else if (otpSent && !/^\d{6}$/.test(otp)) {
      newErrors.otp = "OTP must be 6 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles sending OTP to the backend.
   */
  const handleSendOtp = async () => {
    if (!validate()) return;
    try {
      const res = await axios.post("http://localhost:8080/api/auth/send-otp", {
        phoneNumber,
      });
      setMessage(res.data as string);
      setOtpSent(true);
    } catch (err: any) {
      console.error("Send OTP error:", err);
      if (err.response) setMessage(err.response.data as string);
      else setMessage("Server error");
    }
  };

  /**
   * Handles verifying OTP for login.
   */
  const handleVerifyOtp = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await axios.post("http://localhost:8080/api/auth/verify-otp", {
        phoneNumber,
        otp,
      });
      setMessage(res.data as string);
    } catch (err: any) {
      console.error("Verify OTP error:", err);
      if (err.response) setMessage(err.response.data as string);
      else setMessage("Server error");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleVerifyOtp} className="login-form">
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        {!otpSent ? (
          <button type="button" onClick={handleSendOtp} className="login-button">
            Send OTP
          </button>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              {errors.otp && <span className="error">{errors.otp}</span>}
            </div>
            <button type="submit" className="login-button">
              Verify OTP
            </button>
          </>
        )}
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginForm;
