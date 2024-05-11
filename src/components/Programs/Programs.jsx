import React from 'react'
import './Programs.css'
import  Flora_1 from '../../assets/Flora_1.png'
import  Flora_2 from '../../assets/Flora_2.png'
import  Flora_3 from '../../assets/Flora_3.jpg'
import  Flora_4 from '../../assets/Flora_4.jpg'
import  Flora_5 from '../../assets/Flora_5.jpg'


const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={Flora_1} alt="" />
      </div>
      <div className='program'>
        <img src={Flora_2} alt="" />
      </div>
      <div className='program'>
        <img src={Flora_3} alt="" />
      </div>
      <div className='program'>
        <img src={Flora_4} alt="" />
      </div>
      <div className='program'>
        <img src={Flora_5} alt="" />
      </div>
    </div>
  )
}

export default Programs
