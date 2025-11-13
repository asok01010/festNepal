import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import logo from "@/assets/logo.png";
import "./home.css";

const Home = () => {
  return (
    <AuthLayout>
      <div className="login-card">
        <div className="login-avatar">
          <img src={logo} alt="logo" />
        </div>

        <h1 className="login-title">Welcome to FestNepal</h1>
        <p className="login-subtitle">Your gateway to all the festivals in Nepal</p>

        <div className="home-buttons">
          <Link to="/login" className="login-button">
            Sign In
          </Link>
          <Link to="/signup" className="login-button" style={{ marginTop: "10px" }}>
            Sign Up
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Home;
