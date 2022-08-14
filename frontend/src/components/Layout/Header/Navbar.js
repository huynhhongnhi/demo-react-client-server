import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
        <ul className="navbar-nav text-uppercase">
            <li className="nav-item active">
                <Link className="nav-link tm-nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link tm-nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link tm-nav-link" to="/auth">Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;