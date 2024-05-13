import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='World building' title='Tools'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Worlds'/>
        <Campus/>
        <Title subTitle='Authors' title='Quotes'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get in touch'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App