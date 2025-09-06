import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                <div className="d-flex p-5">
                    <div className="py-md-2">
                        <p className="homepageAbout-bold">Hi 👋 my name is</p>
                        
                        <div className="d-xl-flex gap-5">
                            <h1>Alexia</h1>
                            <p className="homepageAbout-bold">and I am a...</p>
                        </div>
                        <h2 className="homepageRole">Front-End Developer</h2>
                        
                        {/* <p className="homepageAbout">I recently graduated from the University of Washington with a B.S. in Informatics, specializing in data science. My passion lies in turning complex datasets into clear, actionable insights that help drive smarter decisions. I’ve developed strong skills in data analysis, visualization, and problem-solving, and I’m excited to apply these skills in impactful, real-world settings.</p> */}
                        <p className="homepageAbout">I'm a recent Informatics graduate from the University of Washington, specializing in front-end development with an interest in user experience design. Based in Seattle WA, I’m passionate about turning ideas into functional, visually appealing interfaces.</p>
                    </div>

                    <div className="ms-auto">
                        <div className="polaroid-outline flex-column align-items-center p-3" style={{ lineHeight: '1.2' }}>
                            <img src="/img/homepagePhoto.png" width={250} className="polaroid-photo"/>
                            <h5 className="align-self-start pt-3 pb-1" style={{color: "#37383e"}}>Alexia Chan</h5>
                            <div className="d-flex gap-2 align-self-start" >
                                <span className="material-symbols-outlined" style={{ fontSize: '18px'}}>location_on</span>
                                <p className="polaroid-text">Seattle, WA</p>
                            </div>
                            <div className="d-flex gap-2 align-self-start">
                                <span className="material-symbols-outlined" style={{ fontSize: '18px'}}>mail</span>
                                <p className="polaroid-text">alexiachan24@gmail.com</p>
                            </div>
                            <div className="d-flex gap-2 align-self-start">
                                <span class="material-symbols-outlined" style={{ fontSize: '18px'}}>group_search</span>
                                <a href="https://www.linkedin.com/in/alexiachan1" target="_blank" className="linkedinlink polaroid-text">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-4">
                    <a href="#projects" className="checkout-link">Check out my work!</a>
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
                </div>
            </div>
            <Footer />
            
        </div>
    )
}
