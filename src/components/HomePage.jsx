import { useGames } from "../app/useGames";

export default function HomePage() {
  const { games, loading, error } = useGames();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>hello</div>;
}
