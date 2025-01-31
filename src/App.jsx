import "./styles.css"
import { About } from "./About.jsx"
import { Projects } from "./Projects.jsx" 
import { Experience } from "./Experience.jsx"
import { ContactForm } from "./ContactForm.jsx"

export default function App() {
  return (
    <>
      <nav>
          <div>
              <p className="logo">Alexia Chan</p>
          </div>
          <div className="hamburgerMenu">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
          </div>
          <div className="navLinks">
              <a href="#top">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
              {/* <button onClick="window.open('/files/RESUME.pdf')">Resume</button> */}
              <button onClick={() => window.open("/files/RESUME.pdf", "_blank")}>Resume</button>
          </div>
      </nav>
      
      <About />
      
      <Projects />
      
      <Experience />

      <ContactForm />

      <div className="links">
          <a href="https://github.com/achan124">GitHub</a>
          <a href="https://www.linkedin.com/in/alexiachan1">LinkedIn</a>
      </div>
    </>
  )
}

