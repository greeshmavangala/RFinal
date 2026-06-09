import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    addToCart,
    decreaseQty,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart glass">
          <h3>Your cart is empty 😔</h3>
          <button onClick={() => navigate("/restaurants")}>
            Explore Restaurants
          </button>
        </div>
      ) : (
        <>
          <div className="cart-grid">

            {cart.map((item) => (
              <div key={item.id} className="cart-card glass">

                <div>
                  <h3>{item.name}</h3>
                  <p>₹ {item.price}</p>

                  <div className="qty">
                    <button onClick={() => decreaseQty(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => addToCart(item)}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <div className="cart-summary glass">

            <h3>Total: ₹ {total}</h3>

            <div className="cart-actions">
              <button
                className="btn-secondary"
                onClick={clearCart}
              >
                Clear Cart
              </button>

              <button
                className="btn-primary"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>

          </div>
        </>
      )}

    </div>
  );
}