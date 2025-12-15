import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  // 🌙 DARK MODE TOGGLE
  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme =
      html.getAttribute("data-theme") || "light";

    const nextTheme =
      currentTheme === "light" ? "dark" : "light";

    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <Link className="navbar-brand fw-bold" to="/">
        JobConnect
      </Link>

      <div className="ms-auto d-flex align-items-center gap-2">
        {/* JOBS – LOGIN REQUIRED */}
        {loggedIn && (
          <Link className="nav-link" to="/jobs">
            Jobs
          </Link>
        )}

        {/* 🌙 DARK MODE */}
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={toggleTheme}
          title="Toggle Dark Mode"
        >
          🌙
        </button>

        {!loggedIn ? (
          <>
            <Link className="btn btn-outline-primary" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-primary" to="/dashboard">
              Dashboard
            </Link>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
