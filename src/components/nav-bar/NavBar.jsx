import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


const NavBar = () => {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <Link to="/" ><a href="!#" className="nav-link">Home</a></Link>
                </li>
                <li >
                    <Link to="/posts"><a href="!#" className="nav-link">Posts</a></Link>
                </li>
                <li >
                    <Link to="/photos"><a href="!#" className="nav-link">Photos</a></Link>
                </li>
                <li>
                    <Link to="/contacts"><a href="!#" className="nav-link">Contacts</a></Link>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;