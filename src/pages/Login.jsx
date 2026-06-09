import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    login({
      name: "Foodie User",
      email: form.email,
    });

    // go to restaurants page after login
    navigate("/restaurants");
  };

  return (
    <div className="auth-page">

      {/* LEFT SIDE */}
      <div className="auth-left">

        <div className="brand">
          ByteBite
        </div>

        <h1>
          Welcome Back!!
        </h1>

        <p>
          Login to continue ordering your favorite food
        </p>

        <div className="features">
          <div>⚡ Fast Delivery</div>
          <div>🍕 Top Restaurants</div>
          <div>💳 Secure Payments</div>
          <div>📦 Easy Tracking</div>
        </div>

        <div className="quote">
          “Good food = Good mood 😋”
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">

        <div className="auth-card">

          <h2>Login</h2>
          <p className="sub">Welcome back! Please login</p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button type="submit">Login</button>

          </form>

          <p className="switch">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>

        </div>

      </div>

    </div>
  );
}