import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { toast } from "react-toastify";
import "./login.css";

// Simpler, easier-to-read Signup component — UI unchanged.
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup submit handler invoked", { name, email });
    if (!name || !email || !password || !confirmPassword) {
      console.error("Signup error: missing fields", {
        name,
        email,
        password,
        confirmPassword,
      });
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      console.error("Signup error: passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      console.error("Signup error: password too short");
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then(async (res) => {
        const text = await res.text();
        if (res.ok) {
          toast.success(text || "Account created successfully!");
          navigate("/login");
        } else {
          toast.error(text || "Signup failed");
        }
      })
      .catch((err) => {
        console.error("Signup network error:", err);
        toast.error("Network error while signing up");
      })
      .finally(() => setLoading(false));
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
          <label className="login-label" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            className="login-input"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label" htmlFor="password">
            Password
          </label>
          <div className="login-input-with-icon">
            <input
              id="password"
              name="password"
              className="login-input"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="password-toggle"
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <label className="login-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="login-input-with-icon">
            <input
              id="confirmPassword"
              name="confirmPassword"
              className="login-input"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              aria-label={showConfirm ? "Hide password" : "Show password"}
              className="password-toggle"
              onClick={() => setShowConfirm((s) => !s)}
            >
              {showConfirm ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
            onClick={() => console.log("Signup button clicked")}
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <p className="login-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
