import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ProjectPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody p-5">
                <h1 style={{fontSize: 45}} className="text-center">My Projects</h1>

                <div className="d-flex flex-wrap justify-content-center gap-5 m-5 pt-5">
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