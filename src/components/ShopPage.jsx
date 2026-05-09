import { useState } from "react";
import ProductCard from "./ProductCard";
import { useGames } from "../app/useGames";

export default function ShopPage() {
  const [page, setPage] = useState(1);
  const { games, loading, error, pagination } = useGames(page);

  const [localGames, setLocalGames] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (game) => {
    const newCart = [...localGames, game];
    setLocalGames(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  if (loading) return <>Loading...</>;
  if (error) throw error;

  const { currentPage, lastPage } = pagination;

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(lastPage, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  console.log(games[0]);

  return (
    <div>
      <div className="shop-grid">
        {games.map((game) => (
          <ProductCard
            key={game.id}
            game={game}
            btnToShow="add"
            onAdd={addToCart}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={num === currentPage ? "active" : ""}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={currentPage === lastPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
