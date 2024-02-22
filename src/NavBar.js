import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <Link className="link" to="/">
                Vending Machine
            </Link>
            <Link className="link" to="/coke">
                Coke
            </Link>
            <Link className="link" to="/cookies">
                Cookies
            </Link>
            <Link className="link" to="/chips">
                Chips
            </Link>
        </nav>
    );
}

export default NavBar;