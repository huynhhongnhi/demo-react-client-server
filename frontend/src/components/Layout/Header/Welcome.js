import React from "react"

const Menu = () => {
  return (
    <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
        <ul className="navbar-nav text-uppercase">
            <li className="nav-item active">
                <a className="nav-link tm-nav-link" href="#">Videos <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link tm-nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link tm-nav-link" href="contact.html">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu;