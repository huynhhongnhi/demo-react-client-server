import React from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
        <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
            <ul className="navbar-nav text-uppercase">
                <li className="nav-item active">
                    <Link className="nav-link tm-nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link tm-nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link tm-nav-link" to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </Router>
  )
}

export default Navbar;