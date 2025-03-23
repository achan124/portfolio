// import React, { useRef, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";

export function AboutPage() {


    return (
        <div>
            <Navbar />
            <div className="contentBody">
                <h1 style={{fontSize: 50}} className="text-center mb-5 pb-5">About me</h1>

                <div className="d-flex flex-column flex-lg-row justify-content-center gap-5 mb-5">
                    <div className="d-flex justify-content-center">
                        <img src=".././public/img/me.JPG" alt="picture of me" className="pb-5 selfie"></img>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="m-xl-5 about-text">Hi there! I'm Alexia Chan, a frontend developer with a strong 
                            focus on creating functional, visually engaging experiences. I'm currently pursuing an Informatics 
                            degree at the University of Washington Seattle, where I have developed a deep interest in development and
                            user experience. I will be graduating this June 2025, and am seeking opportunities to develop my skills 
                            and contribute to making positive impact. <br/><br/>

                            With a solid foundation in HTML, CSS, and JavaScript, I’m proficient in modern front-end frameworks like 
                            React, and tools such as Figma, which enable me to build responsive and interactive websites. 
                            I’m always eager to experiment with the latest web technologies to improve both functionality and user 
                            experience. <br/><br/>

                            When I'm not coding or in class, you can find me at a hot pilates class, trying new resturaunts in the area, 
                            or helping serve boba and bánh mì at my family's business (Queen Càphê in Queen Anne!). 
                        </p>
                        <a href='/files/RESUME.pdf' target="_blank" className="mt-3 ms-xl-5 text-center resume-link">View my Resume</a>
                    </div>
                </div>

                <Carousel />


            </div>
            <Footer />
        </div>
    )
}
