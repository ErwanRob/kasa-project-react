import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";

function Header() {
  //Le header est de cette maniere autonome, il récupère le path
  // et est capable d'attribuer une classe css aux boutons du menu
  // en fonction de la page actuelle.

  const currentPath = window.location.pathname;

  return (
    <div className="header">
      <img src={logo} alt="Logo kasa" className="header__logo" />
      <nav className="header__nav">
        <Link
          className={`header__nav-item ${
            currentPath === "/" ? "activeNavItem" : ""
          }`}
          to="/"
        >
          Acceuil
        </Link>
        <Link
          className={`header__nav-item ${
            currentPath === "/about" ? "activeNavItem" : ""
          }`}
          to="/about"
        >
          A propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
