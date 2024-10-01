import React from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {

    const location = useLocation();

  return (
    <>
      <nav className="navbar p-2 sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <a className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
              <a className={`nav-link ${location.pathname === "/about" ? 'active' : ''}`} href="/about">
                  Chi sono
                </a>
              </li>
              <li className="nav-item">
              <a className={`nav-link ${location.pathname === "/blog" ? 'active' : ''}`} href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/contact" ? 'active' : ''}`} href="/contact">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
