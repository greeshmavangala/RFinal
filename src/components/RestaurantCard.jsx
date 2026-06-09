import { useState } from "react";
import { restaurants } from "../data/restaurantsData";
import RestaurantCard from "../components/RestaurantCard";

export default function Restaurants() {
  const [search, setSearch] = useState("");

  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="restaurants-page">

      <h2>🍽 Restaurants</h2>

      <input
        className="search-box"
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>

    </div>
  );
}