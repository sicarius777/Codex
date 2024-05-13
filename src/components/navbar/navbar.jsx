import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png";
import './navbar.css'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        })
    },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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
