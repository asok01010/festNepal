import { useState, useEffect, useRef } from "react";
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
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"credentials" | "otp">("credentials");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  // --------------------- TIMER LOGIC ---------------------
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "otp" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, timer]);


  // --------------------- HANDLE LOGIN (SEND OTP) ---------------------
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
        setStep("otp"); // Move to OTP screen
      } else {
        toast.error(text || "Invalid credentials");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  // ------------------------- HANDLE OTP VERIFY -----------------------
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

        const userData = {
          email: identifier,
          name: data.name || null,
          token: data.token || null,
        };

        if (data.token) {
          sessionStorage.setItem("token", data.token);
        }

        login(userData);

        // 🚀 Trigger Chrome save password (REAL form submission)
        if (hiddenFormRef.current) {
          hiddenFormRef.current.submit();
        }

        // 🚀 Delay redirect so Chrome can show password popup
        setTimeout(() => {
          navigate("/home");
        }, 300);

      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  // ------------------------- HANDLE RESEND OTP -----------------------
  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/auth/resend-otp", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: identifier }),
      });

      const text = await res.text();

      if (res.ok) {
        toast.success(text || "OTP resent");
        setTimer(60);
        setCanResend(false);
        setOtp("");
      } else {
        toast.error(text || "Failed to resend OTP");
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

        {/* --------------------- LOGIN WITH EMAIL + PASSWORD --------------------- */}
        {step === "credentials" ? (
          <form onSubmit={handleCredentialsSubmit} className="login-form" method="post">
            <label className="login-label" htmlFor="username">Email or Username</label>
            <input
              id="username"
              name="username"
              className="login-input"
              type="text"
              placeholder="Enter Username or Email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              autoComplete="username"     // IMPORTANT FOR AUTO-FILL
              required
            />

            <label className="login-label" htmlFor="password">Password</label>
            <div className="login-input-with-icon">
              <input
                id="password"
                name="password"
                className="login-input"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"   // IMPORTANT FOR AUTO-FILL
                required
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
          // ----------------------------- OTP FORM ------------------------------
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

            <div className="resend-container">
              {canResend ? (
                <button
                  type="button"
                  className="resend-button"
                  onClick={handleResendOtp}
                  disabled={loading}
                >
                  Resend OTP
                </button>
              ) : (
                <p className="resend-text">
                  Resend OTP in <span>{timer}s</span>
                </p>
              )}
            </div>
          </form>
        )}

        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      {/* ------------------- HIDDEN FORM TO TRIGGER CHROME SAVE PASSWORD --------------------- */}
      <form
        id="chromeSaveForm"
        style={{ display: "none" }}
        method="POST"
        action="http://localhost:5173/login-success"
      >
        <input
          type="text"
          name="username"
          value={identifier}
          autoComplete="username"
          readOnly
        />
        <input
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          readOnly
        />
      </form>
    </AuthLayout>
  );
};

export default Login;
