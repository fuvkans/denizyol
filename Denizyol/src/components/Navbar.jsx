import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-sm py-2">
      <div className="container-fluid">
        {/* Logo - Sol tarafta */}
        <NavLink className="navbar-brand" to="/">
          Denizyol
        </NavLink>

        {/* Hamburger menü butonu - Mobil görünümde */}
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

        {/* Navbar içeriği */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Tüm içeriği ortala */}
          <div className="navbar-content-wrapper">
            {/* Arama Çubuğu */}
            <form className="search-form" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* Kullanıcı Menüsü */}
            <ul className="navbar-nav user-menu">
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                  <span className="nav-text"> Shopping Cart</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/favorites">
                  <i className="fa-solid fa-heart me-2"></i>
                  <span className="nav-text">Favorites</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/account">
                  <i className="fa-solid fa-user me-2"></i>
                  <span className="nav-text">Account</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
