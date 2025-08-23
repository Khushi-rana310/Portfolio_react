import React from 'react'
import './Hero.css'
import profile_img from '../../assets/circleK.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
      <div id='home' className='hero'>
        <img src={profile_img} alt=" " />
        <h1><span>I'm Khushi Rana, </span> Computer Science Student and Frontend Developer</h1>
        <p>Crafting Digital Experiences with Code & Creativity</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

      </div>
    
  )
}

export default Hero
