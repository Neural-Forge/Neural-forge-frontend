import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/scrape">Scrape</Link>
    </nav>
  );
}
