import "./Auth.css";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../utils/auth";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    login();
    navigate("/jobs");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h3>Create Account 🚀</h3>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            required
          />

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
            Register
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
