import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Notsureyet' title='offer'/>
        <Programs/>

      </div>
    </div>
  )
}

export default App