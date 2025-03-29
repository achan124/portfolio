import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ProjectPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                <h1 style={{fontSize: 50}} className="text-center">My Projects</h1>

                <div className="d-flex flex-wrap justify-content-center gap-5 m-5 pt-5">
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