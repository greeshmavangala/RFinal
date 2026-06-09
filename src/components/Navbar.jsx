import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { restaurants } from "../data/restaurantsData";
import "../styles/navbar.css";
import "../styles/global.css";

export default function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [hide, setHide] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHide(current > lastScroll && current > 80);
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // 🔥 FILTER RESTAURANTS BASED ON SEARCH
  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className={`navbar ${hide ? "hide" : ""}`}>

      {/* LEFT */}
      <div className="nav-left" onClick={() => navigate("/home")}>
        <span>ByteBite</span>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <input
          className="nav-search"
          placeholder="Search restaurants, food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🔥 SEARCH DROPDOWN RESULTS */}
        {search && (
          <div className="search-suggestions glass">

            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((r) => (
                <p
                  key={r.id}
                  onClick={() => {
                    navigate(`/restaurant/${r.id}`);
                    setSearch("");
                  }}
                >
                  🍽 {r.name}
                </p>
              ))
            ) : (
              <p onClick={() => navigate("/restaurants")}>
                😢 No results found - Explore all
              </p>
            )}

          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="nav-right">

        <ThemeToggle />

        <div className="cart-badge" onClick={() => navigate("/cart")}>
          🛒
          <span className="cart-count">{cart?.length || 0}</span>
        </div>

        <div className="profile">
          <button onClick={() => setMenuOpen(!menuOpen)}>👤</button>

          {menuOpen && (
            <div className="dropdown glass">
              <p onClick={() => navigate("/profile")}> Profile</p>
              <p onClick={() => navigate("/orders")}> Orders</p>
              <p onClick={() => navigate("/")}> Logout</p>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}