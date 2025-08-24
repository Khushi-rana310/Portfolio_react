import React from 'react'
import './Development.css'

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">💡 Technical Skills</h2>

      {/* Frontend Section */}
      <div className="skill-block">
        <h3 className="skill-heading">🎨 Frontend</h3>
        <div className="skill-cards">
          <div className="skill-card">
            <h4>React.js</h4>
            <p>Building dynamic, reusable, and interactive UIs.</p>
          </div>
          <div className="skill-card">
            <h4>HTML5 & CSS3</h4>
            <p>Crafting responsive, accessible, and structured layouts.</p>
          </div>
          <div className="skill-card">
            <h4>JavaScript (ES6+)</h4>
            <p>Interactive logic with modern features and APIs.</p>
          </div>
          <div className="skill-card">
            <h4>Next.js</h4>
            <p>For Dynamic and Interactive UIs</p>
          </div>
          
        </div>
      </div>

      {/* Backend Section */}
      <div className="skill-block">
        <h3 className="skill-heading">⚙️ Backend</h3>
        <div className="skill-cards">
          <div className="skill-card">
            <h4>Node.js</h4>
            <p>Scalable server-side applications & REST APIs.</p>
          </div>
          <div className="skill-card">
            <h4>Express.js</h4>
            <p>Lightweight framework for building robust backends.</p>
          </div>
          <div className="skill-card">
            <h4>MongoDB</h4>
            <p>Document-based NoSQL database for modern apps.</p>
          </div>
        </div>
      </div>

      {/* Other Tools Section */}
      <div className="skill-block">
        <h3 className="skill-heading">🛠 Other Tools</h3>
        <div className="skill-cards">
          <div className="skill-card">
            <h4>Git & GitHub</h4>
            <p>Version control and collaborative development.</p>
          </div>
          <div className="skill-card">
            <h4>Postman</h4>
            <p>API testing, debugging, and integration workflows.</p>
          </div>
          <div className="skill-card">
            <h4>Figma</h4>
            <p>Wireframing and UI/UX design prototyping.</p>
          </div>
          
            
          <div className="skill-card">
            <h4>Render</h4>
            <p>Deploy Full stack Application</p>
          </div>
          <div className="skill-card">
            <h4>Vercel</h4>
            <p>Deploy Frontend</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
