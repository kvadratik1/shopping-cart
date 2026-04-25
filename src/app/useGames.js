import { useState, useEffect } from "react";

export function useGames(page = 1) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    total: 0,
  });

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const url = `https://jsonfakery.com/games/paginated?page=${page}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        setGames(result.data);
        setPagination({
          currentPage: result.current_page,
          lastPage: result.last_page,
          total: result.total,
        });
      } catch (error) {
        setError(error);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]);

  return { games, loading, error, pagination };
}
