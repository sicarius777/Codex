import React from 'react'
import './navbar.css'
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="Logo" />
    <ul>
        <li>Home</li>
        <li>Brain Storming</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
        <li>Contact us</li>
    </ul>
    </nav>
      
    
  )
}

export default Navbar
