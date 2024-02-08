import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand ms-3" to="/">
      <img src={`${process.env.PUBLIC_URL}/assets/images/logo/logo192.png`} alt="SPOT Logo" height="30" />
    </Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      {/* Login will not be implemented at this early stage of the app */}
      <ul className="navbar-nav ml-auto" style={{ display: 'none' }}>
        <li className="nav-item">
          <a className="nav-link" href="#login">Log In</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;