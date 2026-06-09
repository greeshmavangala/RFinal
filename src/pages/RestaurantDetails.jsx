import { useParams, useNavigate } from "react-router-dom";
import { restaurants } from "../data/restaurantsData";
import { useCart } from "../context/CartContext";
import "../styles/restaurant.css";

export default function RestaurantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const restaurant = restaurants.find((r) => r.id === Number(id));

  const menu = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 199,
      desc: "Spicy dum biryani with raita",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      id: 2,
      name: "Veg Burger",
      price: 129,
      desc: "Cheesy loaded burger",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      price: 249,
      desc: "Classic Italian pizza",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6HdN2m86Bn-qREYNmTab0g1nN1q81K8S4V2C5gd3Dg&s=10",
    },
    {
      id: 4,
      name: "French Fries",
      price: 99,
      desc: "Crispy golden fries",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    },
  ];

  // find item in cart
  const getItemQty = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  if (!restaurant) {
    return (
      <div className="not-found">
        <h2>🍽 Restaurant not found</h2>
        <button onClick={() => navigate("/restaurants")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">

      {/* HERO */}
      <div className="details-hero glass">

        <div className="hero-img">
          <img src={restaurant.image} alt={restaurant.name} />
        </div>

        <div className="hero-content">
          <h1>{restaurant.name}</h1>
          <p className="cuisine">{restaurant.cuisine}</p>

          <div className="hero-badges">
            <span>⭐ {restaurant.rating}</span>
            <span>⏱ 25-30 min</span>
            <span>🚚 Free Delivery</span>
          </div>

          <button
            className="back-btn"
            onClick={() => navigate("/restaurants")}
          >
            ← Back
          </button>
        </div>
      </div>

      {/* MENU */}
      <div className="menu-section">
        <h2>🍽 Menu</h2>
        <p>Choose your favorite items</p>

        <div className="menu-grid">

          {menu.map((item) => {
            const qty = getItemQty(item.id);

            return (
              <div key={item.id} className="menu-card glass">

                <div className="menu-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="menu-info">
                  <h3>{item.name}</h3>
                  <p className="desc">{item.desc}</p>

                  <div className="menu-bottom">
                    <span className="price">₹ {item.price}</span>

                    {/* ✅ QUANTITY CONTROLS */}
                    {qty === 0 ? (
                      <button onClick={() => addToCart(item)}>
                        + Add
                      </button>
                    ) : (
                      <div className="qty-box">
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                        <span>{qty}</span>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}