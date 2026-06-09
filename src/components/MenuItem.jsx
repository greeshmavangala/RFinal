import { useCart } from "../context/CartContext";

export default function MenuItem({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="menu-item">
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>

      <button onClick={() => addToCart(item)}>
        Add to Cart 🛒
      </button>
    </div>
  );
}