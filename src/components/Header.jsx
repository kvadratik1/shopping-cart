import NavigationBar from "./NavigationBar";
import { Link } from "react-router";

export default function Header() {
  return (
    <div>
      <Link to="/">Shopping Cart</Link>
      <NavigationBar />
    </div>
  );
}
