import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

export function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                {/* <div className="pt-lg-5"> */}
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="mt-5">Alexia Chan</h1>
                        <h2 className="homepageRole">Front-End Developer</h2>
                        <p className="homepageAbout">I'm a recent Informatics graduate from the University of Washington, specializing in front-end development with an interest in user experience design. Based in Seattle WA, I’m passionate about turning ideas into functional, visually appealing interfaces.</p>
                        <a href="#projects" className="checkout-link">Check out my work!</a>
                    </div>
                    {/* <div className="d-none d-lg-block ms-xl-5">
                        <p className="text-center logo-big">楚</p>
                        <p className="text-center logo-big">欣</p>
                    </div>  */}
                {/* </div> */}

                <div id="projects" className="d-flex flex-wrap justify-content-center gap-5 m-5 homepageProjects">
                    <Link to="/queencaphe" className="imgBox">
                        <div>
                            <img src="/img/queenCaphe.png" alt="queen caphe project mockup"/>
                            <div className="overlay">
                                <span>Queen Caphe</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/levelUpLearning" className="imgBox">
                        <div>
                            <img src="/img/levelUpLearning.png" alt="Level Up Learning project mockup"/>
                            <div className="overlay">
                                <span>Level Up Learning</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/recipeasy" className="imgBox">
                        <div>
                            <img src="/img/recipEASY.png" alt="recipeasy project mockup"/>
                            <div className="overlay">
                                <span>recipEASY</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/dawgride" className="imgBox">
                        <div>
                            <img src="/img/dawgride.png" alt="DawgRide project mockup"/>
                            <div className="overlay">
                                <span>DawgRide</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/smiski" className="imgBox">
                        <div>
                            <img src="/img/smiskiGrove.png" alt="Smiski Grove project mockup"/>
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
