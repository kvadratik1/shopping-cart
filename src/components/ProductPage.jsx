import { useParams, useLocation } from "react-router";

export default function ProductPage() {
  const { id } = useParams();
  const { state } = useLocation();

  const game = state?.game;

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <img
        src={game.background_image}
        alt={game.name}
        style={{
          width: "100%",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      />

      <h1>{game.name}</h1>

      <p>⭐ Rating: {game.rating}</p>

      <p>Released: {game.released}</p>

      <p>Metacritic: {game.metacritic}</p>
    </div>
  );
}
