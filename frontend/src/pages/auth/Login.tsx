import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import OTPModal from "@/components/OTPModal";
import { toast } from "sonner";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    // Simulated API call for demo / visual
    setTimeout(() => {
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sent to your email");
    }, 900);
  };

  const handleOTPVerified = () => {
    toast.success("Login successful!");
    navigate("/");
  };

  return (
    <AuthLayout>
      <div className="login-card">
        <div className="login-avatar">
          <img
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=256&q=60"
            alt="logo"
          />
        </div>

        <h1 className="login-title">Sign in</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label" htmlFor="email">
            Email or Username
          </label>
          <input
            id="email"
            className="login-input"
            type="text"
            placeholder="Enter Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="login-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <OTPModal
        open={showOTP}
        onOpenChange={setShowOTP}
        onVerify={handleOTPVerified}
      />
    </AuthLayout>
  );
};

export default Login;
