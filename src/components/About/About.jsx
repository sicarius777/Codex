import React from 'react';
import './About.css';
import about_image from '../../assets/about_image.png';
import play_icon from '../../assets/play_icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_image} alt="about-img" />
        <img src={play_icon} alt="play-icon" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About the Codex</h3>
        <h2>The ultimate location to store your ideas</h2>
        <p>My name is Roderick D'Pen welcome to the Codex. I have been writing worlds for most of my life many of those worlds were lost with the passage of time and the finite nature of many pieces of paper.</p>
        <p>My inspiration for this project, comes from my favorite authors.</p>
        <p>Brandon Sanderson has a enjoys the method of creating a worlds, its cosmology, weather, flora, fauna, and then writing a story about people in that world.</p>
        <p>I have structured this project in to achieve the same methodology by allowing writers to create a world and build within it and then link them together to create a galaxy and eventually maybe their own universe. </p>
        <p>I am always looking to improve this site because I use it myself every day, if you have any ideas please feel free to reach out you can find my email in the contact us tab.</p>
      </div>
    </div>
  );
};

export default About;
