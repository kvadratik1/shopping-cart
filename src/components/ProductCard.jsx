import { Link } from "react-router";

export default function ProductCard({ game, btnToShow, onDelete, onAdd }) {
  return (
    <div className="card">
      <Link to={`/product/${game.id}`} state={{ game }}>
        <img src={game.background_image} alt={game.name} />

        <div className="card-content">
          <h3>{game.name}</h3>

          <p>⭐ Rating: {game.rating}</p>

          <div className="price">Free</div>
        </div>
      </Link>

      <div className="card-content">
        {btnToShow === "delete" && (
          <button onClick={() => onDelete(game.id)}>Delete</button>
        )}

        {btnToShow === "add" && (
          <button onClick={() => onAdd(game)}>Add to cart</button>
        )}
      </div>
    </div>
  );
}
