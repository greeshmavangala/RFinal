import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

export default function Signup() {
  const { login } = useUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();

    login({
      name: form.name,
      email: form.email,
    });

    navigate("/");
  };

  return (
    <div className="auth-page">

      {/* LEFT SIDE */}
      <div className="auth-left">

        <div className="brand">
          ByteBite
        </div>

        <h1>
          Join India’s best food delivery platform
        </h1>

        <p>
          Fast delivery • Best restaurants • Exclusive offers • Easy ordering
        </p>

        <div className="features">
          <div>🚀 Instant Ordering System</div>
          <div>🍕 Top Rated Restaurants</div>
          <div>💰 Exclusive Discounts & Offers</div>
          <div>📦 Doorstep Fast Delivery</div>
        </div>

        <div className="quote">
          “Fresh food, fast delivery, happy life 😋”
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">

        <div className="auth-card">

          <h2>Create Account ✨</h2>
          <p className="sub">Sign up to start ordering</p>

          <form onSubmit={handleSignup}>

            <input
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

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

            <button type="submit">Create Account</button>

          </form>

          <p className="switch">
            Already have an account? <Link to="/">Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}