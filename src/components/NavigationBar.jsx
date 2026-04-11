import { Link } from "react-router";

export default function NavigationBar() {
  return (
    <div>
      <Link to="/cart">cart</Link> | <Link to="/shop">shop</Link>
    </div>
  );
}
