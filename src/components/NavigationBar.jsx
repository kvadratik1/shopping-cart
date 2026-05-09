import { Link } from "react-router";

export default function NavigationBar() {
  return (
    <header className="navbar">
      <div className="logo">GameStore</div>

      <nav className="nav-center">
        <Link to="/shop">Shop</Link>
      </nav>

      <nav className="nav-right">
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
