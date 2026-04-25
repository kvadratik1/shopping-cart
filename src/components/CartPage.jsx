import ProductCard from "./ProductCard";
import { useState } from "react";

export default function CartPage() {
  const [games, setGames] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleDelete = (id) => {
    const newCart = games.filter((g) => g.id !== id);
    setGames(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div>
      {games.map((game) => (
        <ProductCard
          key={game.id}
          game={game}
          btnToShow="delete"
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
