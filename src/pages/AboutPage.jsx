// import React, { useRef, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";

export function AboutPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody p-5">
                <h1 style={{fontSize: 45}} className="text-center pt-3">About me</h1>

                <div className="d-flex flex-column flex-xl-row justify-content-center gap-5 mt-5 py-3 px-xl-5">
                    <div className="d-flex justify-content-center">
                        <img src="/img/gradPic.jpg" alt="picture of me" className="pb-5 selfie"></img>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="about-text">Hi there! I'm Alexia Chan, a data analyst passionate about using complex data to 
                            find meaning and answer analytical questions. As a recent Informatics graduate from the University 
                            of Washington, I have built a strong foundation in data analysis, visualization, and problem-solving.
                            I am excited to apply my skills to solve complex problems that have real-world impact.<br></br><br></br>

                            My technical toolkit includes SQL and Excel for querying and managing data, along with visualization tools such as 
                            Tableau and Power BI. With additional experience in front-end development (HTML, CSS, JavaScript), I bring 
                            a unique perspective at the intersection of data and development, bridging technical insights with accessible,
                            visually compelling presentations. What excites me about analytics is the ability to transform raw data into 
                            actionable insights. <br></br><br></br>

                            Beyond school or work, you can find me at a hot pilates class, watching ducks at the park, or exploring resturaunts 
                            in the greater Seattle area.
                        </p>
                        <a href='/files/RESUME.pdf' target="_blank" className="mt-3 resume-link">View my Resume</a>
                    </div>
                </div>

                {/* <div className="px-xl-5 pb-3">
                    <h3 className="mb-4">What does 陳 mean?</h3>
                    <p>
                        It's my Chinese surname, <em>Chan</em>. I chose it for my logo because my family and culture are 
                        very important to me. When I see it, I remember why I do this work and who I'm doing it 
                        for. I want my projects to feel personal - a mix of my background with all the new things I've learned.
                        This character reminds me to bring pieces of my heritage into the things that I create.         
                    </p>
                </div> */}

                {/* <div className="m-xl-5 px-xl-5 pb-5">
                    <h3 className="mb-4">Hobbies & Other Interests</h3>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}
