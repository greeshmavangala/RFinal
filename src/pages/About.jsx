import "../styles/about.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1> About ByteBite</h1>
        <p>
          ByteBite is your one-stop destination for discovering the best
          restaurants and ordering delicious food instantly.
        </p>
      </section>

      {/* STORY */}
      <section className="about-section glass">
        <h2>Our Story</h2>
        <p>
          ByteBite started with a simple idea — to make food ordering fast,
          easy, and enjoyable. We connect users with top restaurants and ensure
          every meal reaches fresh and on time.
        </p>
      </section>

      {/* MISSION */}
      <section className="about-grid">

        <div className="about-card glass">
          <h3>🎯 Our Mission</h3>
          <p>
            To deliver food faster, fresher, and better than ever before using
            smart technology.
          </p>
        </div>

        <div className="about-card glass">
          <h3>🚀 Our Vision</h3>
          <p>
            To become the most trusted food delivery platform across every city.
          </p>
        </div>

        <div className="about-card glass">
          <h3>💡 Why Choose Us</h3>
          <p>
            Top restaurants, real-time delivery tracking, and seamless ordering
            experience.
          </p>
        </div>

      </section>

      {/* STATS */}
      <section className="about-stats glass">

        <div>
          <h2>500+</h2>
          <p>Restaurants</p>
        </div>

        <div>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>4.8⭐</h2>
          <p>Average Rating</p>
        </div>

        <div>
          <h2>30 min</h2>
          <p>Fast Delivery</p>
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta glass">
        <h2>Ready to explore delicious food? 😋</h2>
        <p>Join thousands of users enjoying fast food delivery.</p>

        <button onClick={() => navigate("/restaurants")}>
          Explore Restaurants
        </button>
      </section>

    </div>
  );
}