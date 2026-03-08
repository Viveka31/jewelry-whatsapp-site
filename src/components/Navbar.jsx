import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>💎 JewelCraft</h2>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/rings">Rings</Link>
        <Link to="/necklace">Necklace</Link>
        <Link to="/earrings">Earrings</Link>
        <Link to="/bangles">Bangles</Link>
      </div>
    </nav>
  );
}