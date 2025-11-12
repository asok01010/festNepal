import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import logo from "@/assets/logo.png"; // adjust path according to your project

import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"credentials" | "otp">("credentials");

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: identifier, password }),
    })
      .then(async (res) => {
        const text = await res.text();
        if (res.ok) {
          toast.success(text || "OTP sent");
          setStep("otp");
        } else {
          toast.error(text || "Invalid credentials");
        }
      })
      .catch((err) => {
        console.error("Login network error:", err);
        toast.error("Network error while signing in");
      })
      .finally(() => setLoading(false));
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    setLoading(true);
    fetch("http://localhost:8080/api/auth/verify-login-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: identifier, otp }),
    })
      .then(async (res) => {
        const text = await res.text();
        if (res.ok) {
          toast.success(text || "Signed in");
          navigate("/");
        } else {
          toast.error(text || "Invalid OTP");
        }
      })
      .catch((err) => {
        console.error("OTP verification network error:", err);
        toast.error("Network error while verifying OTP");
      })
      .finally(() => setLoading(false));
  };

  return (
    <AuthLayout>
      <div className="login-card">
        <div className="login-avatar">
          <img
            src={logo}
            alt="logo"
          />
        </div>

        <h1 className="login-title">Sign in</h1>

        {step === "credentials" ? (
          <form onSubmit={handleCredentialsSubmit} className="login-form">
            <label className="login-label" htmlFor="email">
              Email or Username
            </label>
            <input
              id="email"
              className="login-input"
              type="text"
              placeholder="Enter Username or Email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />

            <label className="login-label" htmlFor="password">
              Password
            </label>
            <div className="login-input-with-icon">
              <input
                id="password"
                className="login-input"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
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

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="login-form">
            <label className="login-label" htmlFor="otp">
              Enter OTP
            </label>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="otp-input"
                  type="text"
                />
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
