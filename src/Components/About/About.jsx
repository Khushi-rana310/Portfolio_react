import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/circleK.jpg'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Beyond coding, I thrive on solving complex problems, exploring emerging technologies, and continuously improving my skillset. I am passionate about building products that are not only functional but also delightful to use.</p>
            <p>I enjoy learning new frameworks, contributing to innovative projects </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{width:"80%"}}/>
            </div>

            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{width:"80%"}}/>
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{width:"70%"}}/>
            </div>

            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{width:"50%"}}/>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+ Projects Completed</h1>
          <p>Tech stack: ReactJs, JavaScript, HTML, CSS, NextJs, Node.js, MongoDB, firestore</p>
        </div>
        <div className="about-achievement">
          <h1>Selected for Infosys Springboard AI Program</h1>
          <p>Pragati: Path to Future cohort 3</p>
        </div>
        <div className="about-achievement">
          <h1>200 Leetcode Question Solved</h1>
          <p>Solved Leetcode Question</p>
        </div>
        <div className="about-achievement">
          <h1>Patent Published</h1>
          <p>Agri Farmanet(KAVYA FARMNET)</p>
        </div>
      </div>
    </div>
  )
}

export default About
