import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>Government of Sri Lanka</span>

          <div className="top-links">
            <span>සිංහල</span>
            <span>தமிழ்</span>
            <span className="active-language">English</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="container nav-content">

          <NavLink to="/" className="logo" onClick={closeMenu}>
            <div className="logo-symbol">RDB</div>

            <div>
              <strong>Rural Development</strong>
              <span>Bureau</span>
            </div>
          </NavLink>

          <nav className={mobileMenu ? "nav-links mobile-open" : "nav-links"}>

            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/programmes" onClick={closeMenu}>
              Programmes
            </NavLink>

            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>

            <NavLink to="/news" onClick={closeMenu}>
              News & Events
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

          </nav>

          <div className="nav-actions">

            <button className="icon-button" aria-label="Search">
              <Search size={20} />
            </button>

            <button
              className="menu-button"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Menu"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;