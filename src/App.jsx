import "./styles.css"
import { Projects } from "./Projects.jsx" 
import { Experience } from "./Experience.jsx"
import { ContactForm } from "./ContactForm.jsx"

export default function App() {
  return (
    <>
      <div className="d-flex w-75 m-auto pt-5 mt-5">

        <div className="w-50">

          <p>Hi, my name is</p>
          <h1 className="mb-5">Alexia Chan</h1>

          <nav className="navBar">
            <ul>
              <li><a href="#top">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>         
            </ul>
          </nav>

        </div>

        <div className="mt-5 w-50">
          <p>I am studying Informatics at the University of Washington with a concentration in Software Development. My interests include Front-End Development and UX Design.</p>
          
          <Projects />
          <Experience />

        </div>

      </div>





      {/* <nav className="d-flex justify-content-lg-between p-lg-3 pb-lg-0">
          <div>
              <p className="fs-5 logo">Alexia Chan</p>
          </div>

          <div className="p-3 position-fixed top-0 end-0 z-3 d-lg-none hamburgerMenu">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
          </div>

          <div className="d-lg-flex me-lg-4 gap-5 navLinks">
              <a href="#top">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a> */}
              {/* <a href="#contact">Contact</a> */}
              {/* <button onClick="window.open('/files/RESUME.pdf')">Resume</button> */}
              {/* <button onClick={() => window.open("/files/RESUME.pdf", "_blank")}>Resume</button>
          </div>
      </nav> */}
      
      {/* <About />
      
      <Projects />
      
      <Experience /> */}

      {/* <ContactForm /> */}

      {/* <div className="d-flex justify-content-center gap-3 links">
          <a href="https://github.com/achan124">GitHub</a>
          <a href="https://www.linkedin.com/in/alexiachan1">LinkedIn</a>
      </div> */}
    </>
  )
}

