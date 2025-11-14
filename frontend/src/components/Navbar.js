import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/dashboard">
        🏦 MyBank
      </Link>

      <ul className="navbar-nav ms-auto d-flex align-items-center">

        <li className="nav-item mx-2">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link" to="/transfer">Transfer</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link" to="/transactions">Transactions</Link>
        </li>

        <Link to="/profile" className="nav-link">Profile</Link>


        {/* 🌙 DARK MODE TOGGLE */}
        <li className="nav-item mx-3">
          <button
            className="btn btn-outline-light"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </li>

        <li className="nav-item mx-2">
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
