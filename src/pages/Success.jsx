import { useNavigate } from "react-router-dom";
import "../styles/success.css";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">

      <div className="success-card">

        <div className="tick">✔</div>

        <h2>Order Placed Successfully</h2>
        <p>Your food is being prepared</p>

        <button onClick={() => navigate("/Home")}>
          Back to Home
        </button>

      </div>

    </div>
  );
}