import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MAHALKOM</h2>

      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/products">Get Started</Link></li>
        <li><Link to="/cart">Panier</Link></li>
      </ul>
    </nav>
  );
}
