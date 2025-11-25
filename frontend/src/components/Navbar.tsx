import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get username from email (part before @)
  const username = user?.email?.split("@")[0] || "User";

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Fest Nepal Logo" className="nav-logo" />
        FestNepal
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/festivals">Festivals</Link>
        </li>
        <li>
          <Link to="/hotels">Hotels</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
      </ul>

      {isAuthenticated ? (
        <div style={{ position: "relative" }} ref={dropdownRef}>
          <button
            className="login-btn"
            onClick={() => setShowDropdown(!showDropdown)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <span>👤</span>
            <span>Hello, {username}</span>
            <span style={{ fontSize: "0.7rem" }}>{showDropdown ? "▲" : "▼"}</span>
          </button>

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 0.5rem)",
                right: 0,
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                minWidth: "200px",
                overflow: "hidden",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div style={{ fontWeight: "600", color: "#333", marginBottom: "0.25rem" }}>
                  {username}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#666" }}>
                  {user?.email}
                </div>
              </div>

              <Link
                to="/profile"
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  color: "#333",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                onClick={() => setShowDropdown(false)}
              >
                👤 Profile
              </Link>

              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  border: "none",
                  backgroundColor: "transparent",
                  color: "#d32f2f",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffebee")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button className="login-btn">
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        </button>
      )}
    </nav>
  );
};

export default Navbar;