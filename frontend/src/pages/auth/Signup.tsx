import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { toast } from "sonner";
import "./login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Account created successfully!");
      navigate("/login");
    }, 1000);
  };

  return (
    <AuthLayout>
      <div className="login-card">
        <div className="login-avatar">
          <img
            src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=256&q=60"
            alt="avatar"
          />
        </div>

        <h1 className="login-title">Sign up</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            className="login-input"
            type="text"
            placeholder="Choose a username"
            value={formData.username}
            onChange={handleChange}
          />

          <label className="login-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="login-input"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="login-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            className="login-input"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <label className="login-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            className="login-input"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <p className="login-footer">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
