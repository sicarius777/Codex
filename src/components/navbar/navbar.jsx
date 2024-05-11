import React from 'react'

import logo from "../../assets/logo.png";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
    <ul>
        <li>Home</li>
        <li>Brain Storming</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
        <li><button className='btn'>Contact us</button></li>
    </ul>
    </nav>
      
    
  )
}

export default Navbar
