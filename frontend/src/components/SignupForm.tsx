import { useState } from "react";
import type { FormEvent } from "react";
import * as React from "react";
import axios from "axios";
import "./LoginForm.css";

/**
 * SignupForm component handles user registration.
 */
const SignupForm: React.FC = () => {
  // State for form inputs
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // State for displaying messages to the user
  const [message, setMessage] = useState<string>("");
  // State for form errors
  const [errors, setErrors] = useState<{ phoneNumber?: string; name?: string; email?: string }>({});

  /**
   * Validates the form inputs.
   * @returns true if valid, false otherwise.
   */
  const validate = (): boolean => {
    const newErrors: { phoneNumber?: string; name?: string; email?: string } = {};
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission for signup.
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signup", {
        phoneNumber,
        name,
        email,
      });
      setMessage(res.data as string);
    } catch (err: any) {
      console.error("Signup error:", err);
      if (err.response) setMessage(err.response.data as string);
      else setMessage("Server error");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit" className="login-button">
          Signup
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SignupForm;
