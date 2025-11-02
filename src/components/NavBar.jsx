import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/directors" className="nav-link">Directors</NavLink>
      <NavLink to="/actors" className="nav-link">Actors</NavLink>
      <NavLink to="/movie" className="nav-link">Movie</NavLink>
    </nav>
    );
};

export default NavBar;
