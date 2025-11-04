import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Rick & Morty App</h2>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Inicio
        </NavLink>
        <NavLink to="/lista" className={({ isActive }) => (isActive ? "active" : "")}>
          Personajes
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}
