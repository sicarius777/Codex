import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png";
import './navbar.css'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 400 ? setSticky(true) : setSticky(false);
        })
    },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
    <ul>
        <li>Home</li>
        <li>Tools</li>
        <li>About us</li>
        <li>Gallery</li>
        <li>Quotes</li>
        <li><button className='btn'>Contact us</button></li>
    </ul>
    </nav>
      
    
  )
}

export default Navbar
