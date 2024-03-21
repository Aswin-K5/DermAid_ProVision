import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav">
            <h1 className="name">DermAid ProVision</h1>
            <ul>
                {/* <li><Link>Home</Link></li> */}
                <li><a href='/'>Home</a></li>
                <li><a href='/Scans'>Scans</a></li>
                <li><a href='/Derm'>Derm</a></li>
                <li><a href='/About'>About</a></li>
                {/* <li><Link></Link></li> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar