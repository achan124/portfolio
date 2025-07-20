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

                <div className="d-flex flex-column flex-lg-row justify-content-center gap-5 mt-5 py-3 px-5">
                    <div className="d-flex justify-content-center">
                        <img src="/img/gradPic.jpg" alt="picture of me" className="pb-5 selfie"></img>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="about-text">Hi there! I'm Alexia Chan, a frontend developer passionate about crafting 
                            functional yet visually compelling digital experiences. Currently completing my Informatics 
                            degree at the University of Washington (Graduating June 2025), I've developed a strong 
                            foundation in development principles and user-centered design. I'm actively seeking opportunities to 
                            expand my skill set while contributing meaningful solutions to both existing systems and 
                            innovative applications.<br/><br/>

                            My technical toolkit includes core web technologies (HTML, CSS, JavaScript) along with modern frameworks 
                            like React and design tools such as Figma. This combination allows me to build responsive, interactive 
                            interfaces that balance functionality with thoughtful user experience. What excites me about development 
                            is that there's always something new to learn and problems to tackle.<br/><br/>

                            Beyond coding, you can find me at a hot pilates class, watching ducks at the park, or exploring resturaunts in the greater Seattle area. 
                        </p>
                        <a href='/files/RESUME.pdf' target="_blank" className="mt-3 resume-link">View my Resume</a>
                    </div>
                </div>

                <div className="px-xl-5 pb-3">
                    <h3 className="mb-4">What does 陳 mean?</h3>
                    <p>
                        It's my Chinese surname, <em>Chan</em>. I chose it for my logo because my family and culture are 
                        very important to me. When I see it, I remember why I do this work and who I'm doing it 
                        for. I want my projects to feel personal - a mix of my background with all the new things I've learned.
                        This character reminds me to bring pieces of my heritage into the things that I create.         
                    </p>
                </div>

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
