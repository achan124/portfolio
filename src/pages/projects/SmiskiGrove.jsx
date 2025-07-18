import "./project.css";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer";

export function SmiskiGrove() {
    return (
        <div style={{backgroundColor: "white"}} className="smiski project">
            <Navbar />
            <h1 className="text-center" style={{color: "#79A07D"}}>Smiski Grove</h1>
            <div style={{backgroundColor: "#E4F1E6"}} className="d-flex justify-content-center">
                <img src="/img/smiski/smiskiGreen.png" className="header-image"></img>
            </div>
            <div className="content-container">
                
                <div className="d-flex flex-wrap gap-2">
                    <p className="tech-stack">JavaScript</p>
                    <p className="tech-stack">React.js</p>
                    <p className="tech-stack">HTML</p>
                    <p className="tech-stack">CSS</p>
                </div>
                <p><strong>Sep 2024 - Dec 2024</strong></p>
                <p>
                    Smiski Grove is a web app designed to help Smiski collectors efficiently organize and track their 
                    collections. It offers an intuitive interface, allowing users to manage their Smiskis by monitoring 
                    which ones they own and plan for future additions.
                </p>
                <p>
                    This was a class project that I worked on in a team of 4 developers. It was my first time building an 
                    end-to-end application after learning JavaScript, so it’s just a silly website that demonstrates
                    my ability to implement features such as user authentication, state management, and data storage. 
                </p>
                <button onClick={() => window.open("https://smiski-grove.web.app", "_blank")} className="checkout-link my-5 me-3 project-button">Website</button>
                <button onClick={() => window.open("https://github.com/achan124/smiski-grove", "_blank")} className="checkout-link my-5 project-button">GitHub</button>

            </div>
            <Footer />
        </div>
    )
}
