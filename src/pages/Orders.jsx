import { useEffect, useState } from "react";
import "../styles/orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fake stored orders (later you can replace with backend/API)
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="orders-page">

      <h2>📦 My Orders</h2>

      {orders.length === 0 ? (
        <div className="empty-orders glass">
          <h3>No orders yet 😔</h3>
          <p>Start ordering your favorite food!</p>
        </div>
      ) : (
        <div className="orders-container">

          {orders.map((order, index) => (
            <div key={index} className="order-card glass">

              <div className="order-header">
                <h3>Order #{index + 1}</h3>
                <span className="status">Delivered</span>
              </div>

              <div className="order-items">
                {order.items.map((item, i) => (
                  <div key={i} className="order-item">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <span>Total: ₹{order.total}</span>
                <span className="date">{order.date}</span>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}