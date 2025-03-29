import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

import dawgRideMockup from "../assets/img/dawgRide.png";
import smiskiGroveMockup from "../assets/img/smiskiGrove.png";

export function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                {/* <div className="pt-lg-5"> */}
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="mt-5">Alexia Chan</h1>
                        <h2 className="homepageRole">Frontend Developer</h2>
                        <p className="homepageAbout">I'm an undergraduate Informatics student at the University of Washington, specializing in front-end development with an interest in user experience design. Based in Seattle WA, I’m passionate about turning ideas into functional, visually appealing interfaces.</p>
                        <a href="#projects" className="checkout-link">Check out my work!</a>
                    </div>
                    {/* <div className="d-none d-lg-block ms-xl-5">
                        <p className="text-center logo-big">楚</p>
                        <p className="text-center logo-big">欣</p>
                    </div>  */}
                {/* </div> */}

                <div id="projects" className="d-flex flex-wrap justify-content-center gap-5 m-5 homepageProjects">
                    <Link to="/dawgride" className="imgBox">
                        <div>
                            <img src={dawgRideMockup} alt="DawgRide project mockup"/>
                            <div className="overlay">
                                <span>DawgRide</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/smiski" className="imgBox">
                        <div>
                            <img src={smiskiGroveMockup} alt="Smiski Grove project mockup"/>
                            <div className="overlay">
                                <span>Smiski Grove</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <ContactForm />
            </div>
            <Footer />
            
        </div>
    )
}
