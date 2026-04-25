import { useParams, useLocation } from "react-router";

export default function ProductPage() {
  const { id } = useParams();
  const { state } = useLocation();
  const game = state?.game;

  if (!game) return <div>Game not found</div>;

  return (
    <>
      <img src={`${game.background_image}`} alt={game.name} />
      <h1>{game.name}</h1>
      <p>{game.rating}</p>
    </>
  );
}
