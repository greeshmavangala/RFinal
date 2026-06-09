import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate();

  const fullText = "ByteBite";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">

          <h1 className="typing-title">
            {text}
            <span className="cursor">|</span>
          </h1>
          <br />
          <p>Your cravings, our responsibility</p>

          <p className="tagline">
            
            Craving something delicious? Discover top restaurants, explore menus,
            and get your favorite food delivered instantly.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/restaurants")}>
              Explore Restaurants
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <p>Restaurants</p>
            </div>

            <div>
              <h3>10K+</h3>
              <p>Orders Delivered</p>
            </div>

            <div>
              <h3>4.8⭐</h3>
              <p>User Rating</p>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose ByteBite?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            🚀
            <h3>Fast Delivery</h3>
            <p>Get food delivered in under 30 minutes.</p>
          </div>

          <div className="feature-card">
            🍽
            <h3>Best Restaurants</h3>
            <p>Only top-rated restaurants listed.</p>
          </div>

          <div className="feature-card">
            💳
            <h3>Easy Payment</h3>
            <p>Cash, card & online payment supported.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Hungry? Let’s fix that 😋</h2>
        <button onClick={() => navigate("/restaurants")}>
          Order Now
        </button>
      </section>

    </div>
  );
}