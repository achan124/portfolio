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

                <div className="m-xl-5 px-xl-5 pb-5">
                    <h3 className="mb-4">What does your logo mean?</h3>
                    {/* <p>
                        My logo is the Chinese spelling of my last name, <em>Chan</em>. When thinking of What
                        my logo should be, I wanted to make sure that it was something that represented who I 
                        am, and what is important to me. I have always been very appreciative of my culture, 
                        as it has allowed me to connect with my family in ways that I otherwise would not have 
                        been able to. 
                    </p>
                    <p>
                        On the homepage is my first name, which roughly translates to mean kind, gentle, and 
                        grateful. This name was given to me by my grandma shortly after I was born. She wanted 
                        me to 
                    </p> */}
                </div>

                <div className="my-5">
                    <h3 className="text-center mb-3">Recent eats I would reccomend</h3>
                    <p className="text-center">Yes, I take pictures of all my food</p>
                    <Carousel />
                </div>


            </div>
            <Footer />
        </div>
    )
}
