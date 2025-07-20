import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                <div className="p-5">
                    <p className="homepageAbout-bold">Hi, my name is</p>
                    <h1>Alexia Chan</h1>
                    <div className="d-md-flex gap-5">
                        <p className="homepageAbout-bold">and I am a...</p>
                        <h2 className="homepageRole">Front-End Developer</h2>
                    </div>
                    
                    <p className="homepageAbout">I'm a recent Informatics graduate from the University of Washington, specializing in front-end development with an interest in user experience design. Based in Seattle WA, I’m passionate about turning ideas into functional, visually appealing interfaces.</p>
                    <div className="text-center mt-5 pt-md-5">
                        <a href="#projects" className="checkout-link mt-md-5">Check out my work!</a>
                    </div>
                </div>

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
            </div>
            <Footer />
            
        </div>
    )
}
