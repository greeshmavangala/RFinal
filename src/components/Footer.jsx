  import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>ByteBite</h2>
          <p>Delicious food delivered fast & fresh.</p>
          
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-bottom">
          © 2026 ByteBite • Runtime: Hunger → Satisfaction
        </div>

      </div>
    </footer>
  );
}