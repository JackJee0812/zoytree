import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';

const Navbar = () => {
  const location = useLocation();
  const isAbout = location.pathname === '/about';

  return (
    <nav className="custom-nav" aria-label="Main Navigation">
      <div className="container flex-between">
        <span className="logo">
          <img src={logo} alt="Zoytree icon" />
        </span>

        <div className="nav-pill">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <a href="/#services">Services</a>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About us
          </NavLink>
        </div>

        <button className="btn-contact" aria-label="Contact Zoytree">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
