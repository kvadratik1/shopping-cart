import { Link } from "react-router";

export default function ProductCard({ game }) {
  const addTocart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(game);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <Link to={`/product/${game.id}`} state={{ game }}>
        game name {game.name}
      </Link>
      <p>game rating {game.rating}</p>
      <button onClick={addTocart}>add to cart</button>
    </div>
  );
}
