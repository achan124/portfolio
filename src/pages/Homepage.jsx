import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                <h1>Alexia Chan</h1>
                <h2 className="homepageRole">Frontend Developer</h2>
                <p className="homepageAbout">I'm an undergraduate Informatics student at the University of Washington, specializing in front-end development with an interest in user experience design. Based in Seattle WA, I’m passionate about turning ideas into functional, visually appealing interfaces.</p>
                <button className="mb-5">Check out my work!</button>

                <div className="d-flex flex-wrap justify-content-center gap-5 m-5 homepageProjects">
                    <div className="imgBox">
                        <img src=".././public/img/dawgRide.png"/>
                    </div>
                    <div className="imgBox">
                        <img src=".././public/img/smiskiGrove.png"/>
                    </div>

                </div>
            </div>
            <Footer />
            
        </div>
    )
}
