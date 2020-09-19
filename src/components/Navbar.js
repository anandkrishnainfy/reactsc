import React from "react";
import { Link } from "react-router-dom"; //Link is put in curly braces because it is optional
//Link acts as an anchor tag
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <span>
          <Link to="/" style={{ fontSize: "x-large", fontWeight: "700" }}>
            KMart
          </Link>
        </span>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <span className="myCartIcon">
              <Link to="/cart" style={{ display: "flex" }}>
                My Cart
                <i className="material-icons" style={{ paddingLeft: "10px" }}>
                  shopping_cart
                </i>
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
