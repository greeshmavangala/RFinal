import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

export default function Profile() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  return (
    <div className="profile-page">

      {/* HEADER */}
      <div className="profile-header glass fade-in">

        <div className="avatar pulse">
          {user?.name?.charAt(0) || "U"}
        </div>

        <div className="profile-info">
          <h2>{user?.name || "Guest User"}</h2>
          <p>{user?.email || "Not logged in"}</p>
        </div>

      </div>

      {/* CARDS */}
      <div className="profile-grid">

        <div className="profile-card glass slide-up delay-1">
          <h3>📦 Orders</h3>
          <p>View your order history</p>
          <button onClick={() => navigate("/orders")}>
            Open Orders
          </button>
        </div>

        <div className="profile-card glass slide-up delay-2">
          <h3>🛒 Cart</h3>
          <p>Check items in cart</p>
          <button onClick={() => navigate("/cart")}>
            Open Cart
          </button>
        </div>

        <div className="profile-card glass slide-up delay-3">
          <h3>🍽 Restaurants</h3>
          <p>Explore food options</p>
          <button onClick={() => navigate("/restaurants")}>
            Explore
          </button>
        </div>

      </div>

      {/* LOGOUT */}
      <div className="logout-section fade-in">
        <button onClick={()=> navigate("/")}>
           Logout
        </button>
      </div>

    </div>
  );
}