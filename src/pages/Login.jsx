import "./Auth.css";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/jobs");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h3>Welcome Back 👋</h3>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email address"
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            required
          />

          <button className="auth-btn w-100">
            Login
          </button>
        </form>

        <div className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
