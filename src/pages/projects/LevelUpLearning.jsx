import "./project.css";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer";

export function LevelUpLearning() {
    return (
        <div style={{backgroundColor: "white"}} className="leveluplearning project">
            <Navbar />
            <h1 className="text-center" style={{color: "#FE6F61"}}>Level Up Learning</h1>
            <div style={{backgroundColor: "#FFECEB"}} className="d-flex justify-content-center">
                <img src="/img/leveluplearning/levelUpLearningPink.png" className="header-image"></img>
            </div>

            <div className="content-container">
                <div className="d-flex flex-wrap gap-2">
                    <p className="tech-stack">Javascript</p>
                    <p className="tech-stack">React.js</p>
                    <p className="tech-stack">HTML</p>
                    <p className="tech-stack">CSS</p>
                    <p className="tech-stack">Firebase</p>
                </div>
                <p><strong>Jan 2025 - Jun 2025</strong></p>
                <p>Level Up Learning is an interactive platform that combines reading with gamified 
                    incentives. Students read books, take quizzes based on each chapter, and earn points for correct 
                    answers. Points can then be used to play games and customize their characters.</p>

                <div className="content-group">
                    <h2 style={{color: "#FE6F61"}}>Problem Space</h2>
                    {/* <h3 className="text-center mt-5">Impact of COVID-19</h3> */}
                    <div className="d-flex align-items-center gap-3 mt-5">
                        <span className="circle-number" style={{backgroundColor: "#F9D156"}}>1</span>
                        <p>
                            Average fall 2021 reading test scores in grades 3–8 were .09 to .17 standard deviations lower 
                            relative to same-grade peers in fall 2019. (Kuhfeld et al., 2022)
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mt-3">
                        <span className="circle-number" style={{backgroundColor: "#F9D156"}}>2</span>
                        <p>
                            ELA scores in 2022 were below pre-pandemic averages for public schools in Washington.
                            (Washington State Institute for Public Policy, 2023)
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mt-3">
                        <span className="circle-number" style={{backgroundColor: "#F9D156"}}>2</span>
                        <p>
                            It is estimated that 300 million kids will lack basic reading comprehension and numeracy skills by 
                            2030. (United Nations, n.d.)
                        </p>
                    </div>

                    <h3 className="text-center mt-5">Causes of Decline</h3>
                    <div className="d-flex flex-wrap justify-content-center gap-5 pt-5">
                        <div className="text-center" style={{width: "45%"}}>
                            <img src="/img/leveluplearning/germ.png" width={100}/>
                            <p><strong>COVID-19</strong></p>
                            <p>Public schools struggled to navigate curricula during and after COVID-19</p>
                        </div>
                        <div className="text-center" style={{width: "45%"}}>
                            <img src="/img/leveluplearning/laptop.png" width={100}/>
                            <p><strong>TECHNOLOGY</strong></p>
                            <p>The attention span of students has decreased due to the increase use of technology</p>
                        </div>
                        <div className="text-center" style={{width: "45%"}}>
                            <img src="/img/leveluplearning/stickfigure.png" width={100}/>
                            <p><strong>LACK OF PERSONALIZATION</strong></p>
                            <p>Big classroom sizes make it hard for students to get the one on one support they need</p>
                        </div>
                        <div className="text-center" style={{width: "45%"}}>
                            <img src="/img/leveluplearning/attention.png" width={100}/>
                            <p><strong>LACK OF ENGAGEMENT</strong></p>
                            <p>Students require creative ways to grab their attention whilst learning</p>
                        </div>
                    </div>
                </div>

                <div className="content-group">
                    <div className="p-5 hmw-container" style={{backgroundColor: "#FE6F61"}}>
                        <h3 className="text-center pb-2" style={{color: "white"}}>How might we...</h3>
                        <p className="text-center hmw-text">
                            make the learning process more interactive and engaging for middle school students 
                            in the greater Seattle area to improve their reading comprehension? 
                        </p>
                    </div>
                </div>


                <div className="content-group">
                    <h2 className="pb-5" style={{color: "#FE6F61"}}>User Research</h2>
                    <h3 className="mb-4">Key Insights</h3>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>
                            Students have higher engagement and knowledge retention when learning through interactivity 
                            and immediate feedback mechanisms.
                        </p>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>
                            Many stakeholders support curriculum modernization, especially with the integration of digital tools.
                        </p>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>
                            Recent studies show literacy rates and reading comprehension skills are declining among students.
                        </p>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>
                            Many digital educational curriculums were developed hastily after Covid-19 happened.
                        </p>
                    </div>

                    <h3 className="mb-4 mt-5">Personas</h3>
                    <h4 className="mb-4">Sam - The Motivated Gamer</h4>
                    <img src="/img/leveluplearning/personaSam.png" width={750}/>

                    <h4 className="mb-4 mt-5">Alex - The Passionate Reader</h4>
                    <img src="/img/leveluplearning/personaAlex.png" width={750}/>

                    <h3 className="mb-4 mt-5">User Testing & Validation</h3>

                    <p><strong>Concepts and Assumptions</strong></p>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>Engagement - Games will help engage and motivate kids</p>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>Functionality - Is the design easy to understand and use?</p>
                    </div>

                    <p><strong>Insights</strong></p>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>Different students will have different motivations for reading</p>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>Kids responded positively to game features but had some confusion about certain aspects</p>
                    </div>

                    <p><strong>Design Direction Derived from Validation</strong></p>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>Take into account kids who are avid readers vs those who only read in school</p>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                        <img src="/img/leveluplearning/bullet.png" width={30} alt="bullet icon" />
                        <p>Present information in a way that is clear to understand at first glance</p>
                    </div>
                </div>
    

                <div className="content-group">
                    <h2 className="mb-5 pb-lg-3 pt-5" style={{color: "#FE6F61"}}>Solution & Features</h2>
                    <h3 className="text-center">Demo Video</h3>

                    <div className="text-center">
                        <iframe width="640" height="360" 
                            src="https://www.youtube.com/embed/TqJbbSPM1fo?si=wEjrEvT7Q0tulEK7" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div className="mb-5 pb-5">
                        <h3 className="text-center mt-5">Reading</h3>
                        <img src="/img/leveluplearning/solution1.png" width={"900"} className="pb-3"/>
                        <h3 className="text-center pt-5">Quiz</h3>
                        <img src="/img/leveluplearning/solution2.png" width={"900"} className="pb-3"/>
                        <h3 className="text-center pt-5">Character Building</h3>
                        <img src="/img/leveluplearning/solution3.png" width={"900"}/>
                        <h3 className="text-center pt-5">Games</h3>
                        <img src="/img/leveluplearning/solution4.png" width={"900"} className="pb-3"/>
                    </div>

                    <button onClick={() => window.open("https://capstonecades4.vercel.app/", "_blank")} className="checkout-link mt-5 me-3 project-button">Website</button>
                    <button onClick={() => window.open("https://github.com/CADES25/capstone", "_blank")} className="checkout-link mt-5 project-button">GitHub</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
