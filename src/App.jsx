import "./styles.css"
import { About } from "./About.jsx"
import { Projects } from "./Projects.jsx" 
import { Experience } from "./Experience.jsx"
import { ContactForm } from "./ContactForm.jsx"

export default function App() {
  return (
    <>
      <nav className="d-flex justify-content-lg-between p-lg-3 pb-lg-0">
          <div>
              <p className="fs-5 logo">Alexia Chan</p>
          </div>

          {/* mobile nav */}
          <div className="p-3 position-fixed top-0 end-0 z-3 d-lg-none hamburgerMenu">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
          </div>

          {/* desktop nav */}
          <div className="d-lg-flex me-lg-4 gap-5 navLinks">
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

      <div className="d-flex justify-content-center gap-3 links">
          <a href="https://github.com/achan124">GitHub</a>
          <a href="https://www.linkedin.com/in/alexiachan1">LinkedIn</a>
      </div>
    </>
  )
}

