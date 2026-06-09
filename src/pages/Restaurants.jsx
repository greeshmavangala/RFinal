import { useState, useEffect } from "react";
import { restaurants } from "../data/restaurantsData";
import { useNavigate } from "react-router-dom";
import "../styles/restaurant.css";

export default function Restaurants() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // 🔥 typing effect for heading
  const fullText = "Discover Best Restaurants 🍽";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 90);

    return () => clearInterval(typing);
  }, []);

  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="restaurants-page">

      {/* HERO HEADER */}
      <div className="restaurants-hero glass">

        <div className="hero-content">

          {/* ✨ Typing heading */}
          <h1 className="typing-heading">
            {text}
            <span className="cursor">|</span>
          </h1>

          <p>
            Explore top-rated restaurants, delicious food & fast delivery near you
          </p>
        </div>

        <div className="hero-stats">
          <div>
            <h3>500+</h3>
            <p>Restaurants</p>
          </div>
          <div>
            <h3>10K+</h3>
            <p>Orders</p>
          </div>
          <div>
            <h3>4.8⭐</h3>
            <p>Rating</p>
          </div>
        </div>

        <input
          className="search-box"
          placeholder="Search restaurants, cuisine, food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID SECTION */}
      <div className="restaurant-grid">

        {filtered.length === 0 ? (
          <div className="no-results">
            😢 No restaurants found
          </div>
        ) : (
          filtered.map((r) => (
            <div
              className="restaurant-card glass"
              key={r.id}
              onClick={() => navigate(`/restaurant/${r.id}`)}
            >

              <div className="image-wrapper">
                <img src={r.image} alt={r.name} />

                <div className="badges">
                  <span className="rating">⭐ {r.rating}</span>
                  <span className="time">⏱ 25-30 min</span>
                </div>
              </div>

              <div className="card-content">
                <h3>{r.name}</h3>
                <p>{r.cuisine}</p>

                <button className="view-btn">
                  View Menu →
                </button>
              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}