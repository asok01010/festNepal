import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import logo from "@/assets/logo.png";
import { useAuth } from "@/context/AuthContext";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"credentials" | "otp">("credentials");

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  // Load saved password (if exists)
  useEffect(() => {
    const savedPass = localStorage.getItem("savedPassword");
    if (savedPass) setPassword(savedPass);
  }, []);

  // ----------- HANDLE LOGIN (SEND OTP) -----------
  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!identifier || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: identifier, password }),
      });

      const text = await res.text();

      if (res.ok) {
        toast.success(text || "OTP sent");
        setStep("otp");
      } else {
        toast.error(text || "Invalid credentials");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  // ----------- HANDLE OTP VERIFY -----------
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/auth/verify-login-otp", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: identifier, otp }),
      });

      const responseText = await res.text();
      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        data = { message: responseText };
      }

      if (res.ok) {
        toast.success("Login successful");

        // --- SAVE PASSWORD HERE ---
        localStorage.setItem("savedPassword", password);

        // Save user data to auth context
        const userData = {
          email: identifier,
          token: data.token || null, // Token might not exist if backend doesn't use JWT
        };

        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        login(userData);

        // Always redirect to home page after login
        localStorage.removeItem("returnUrl"); // Clean up any stored returnUrl

        // Redirect to home page after login
        window.location.href = "/home";
      } else {
        toast.error(data.message || "Invalid OTP");
      }

    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="login-card">
        <div className="login-avatar">
          <img src={logo} alt="logo" />
        </div>

        <h1 className="login-title">Sign in</h1>

        {step === "credentials" ? (
          <form onSubmit={handleCredentialsSubmit} className="login-form">
            <label className="login-label">Email or Username</label>
            <input
              id="email"
              className="login-input"
              type="text"
              placeholder="Enter Username or Email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />

            <label className="login-label">Password</label>
            <div className="login-input-with-icon">
              <input
                className="login-input"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="login-form">
            <label className="login-label">Enter OTP</label>

            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input {...props} className="otp-input" type="text" />
              )}
            />

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
