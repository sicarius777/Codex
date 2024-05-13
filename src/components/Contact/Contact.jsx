import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon2.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact
            informtion below. Your feedback, questions, and suggestions are 
            important to us we strive to the writing community.
            <ul>
                <li> <img src={mail_icon} alt="" />CodexOfWorlds@gmail.com</li>
                <li> <img src={phone_icon} alt="" />123-456-7890</li>
                <li> <img src={location_icon} alt="" />The HeartWyald</li>
            </ul>
        </p>
      </div>
      <div className="contact-col">

      </div>
    </div>
  )
}

export default Contact
