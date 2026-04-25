import { Link } from "react-router";

export default function ProductCard({ game, btnToShow, onDelete, onAdd }) {
  return (
    <div>
      <Link to={`/product/${game.id}`} state={{ game }}>
        game name {game.name}
      </Link>

      <p>game rating {game.rating}</p>

      {btnToShow === "delete" && (
        <button onClick={() => onDelete(game.id)}>delete</button>
      )}

      {btnToShow === "add" && (
        <button onClick={() => onAdd(game)}>add to cart</button>
      )}
    </div>
  );
}
