import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = 40;
  const finalAmount = total + delivery;

  // PLACE ORDER (FIXED + SAFE)
  const placeOrder = () => {
    if (!cart || cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      const newOrder = {
        items: [...cart],
        total: finalAmount,
        date: new Date().toLocaleString(),
      };

      let existing = [];

      try {
        existing = JSON.parse(localStorage.getItem("orders")) || [];
      } catch (err) {
        existing = [];
      }

      localStorage.setItem(
        "orders",
        JSON.stringify([newOrder, ...existing])
      );

      clearCart();

      // IMPORTANT: direct navigation (no delay needed)
      navigate("/success");

    } catch (error) {
      console.error("Order failed:", error);
      alert("Something went wrong while placing order");
    }
  };

  // EMPTY CART
  if (cart.length === 0) {
    return (
      <div className="checkout-page empty-cart">
        <h2>🛒 Your cart is empty</h2>
        <p>Add some delicious food first!</p>

        <button onClick={() => navigate("/restaurants")}>
          🍽 Go Explore😋
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <h2>🧾 Checkout</h2>

      <div className="checkout-container">

        {/* LEFT */}
        <div className="order-box glass">
          <h3>Your Order</h3>

          {cart.map((item) => (
            <div key={item.id} className="order-item">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="bill-box glass">

          <h3>Bill Summary</h3>

          <div className="bill-row">
            <span>Items Total</span>
            <span>₹{total}</span>
          </div>

          <div className="bill-row">
            <span>Delivery</span>
            <span>₹{delivery}</span>
          </div>

          <hr />

          <div className="bill-row total">
            <span>Total</span>
            <span>₹{finalAmount}</span>
          </div>

          <button onClick={placeOrder}>
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
}