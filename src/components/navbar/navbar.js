import React from "react";
import {Link } from "react-router-dom"
import "./navbar.css";

function Navbar(){
    return (
        <>
        <nav classsName ='navbar'>
            <h3 className='logo' id="LOGO">EASYGHAR</h3>
            <ul className="nav-links">
                <li> <Link to ="/home" className="home">Home</Link></li>
                <li><Link to ="/about"  className="about">About</Link></li>
                <li> <Link to ="/contact" className="contact">Contact</Link></li>
            </ul>
        </nav>

        </>
    )
}
export default Navbar;