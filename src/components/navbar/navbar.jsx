import React from 'react'

import logo from "../../assets/logo.png";
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="" className='logo' />
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
