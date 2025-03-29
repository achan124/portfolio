import "./project.css";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer";

export function DawgRide() {
    return (
        <div style={{backgroundColor: "white"}} className="dawgRide project">
            <Navbar />
            <h1 className="text-center" style={{color: "#1A0A3A"}}>DawgRide</h1>
            <div style={{backgroundColor: "#D8D4E0"}} className="d-flex justify-content-center">
                <img src="/img/dawgride/dawgridePurple.png" className="header-image"></img>
            </div>

            <div className="content-container">
                <div>
                    <p className="tech-stack">React Native</p>
                </div>
                <p><strong>Jan 2025 - Mar 2025</strong></p>
                <p>DawgRide is a mobile app that enhances the safety and convenience of late-night commutes for the UW 
                    community by building on existing Husky NightRide and SafeTrip services.</p>

                <div className="content-group">
                    <h2 className="pb-lg-5">Problem Space</h2>
                    <div className="d-xl-flex">
                        <p className="p-1 pe-5 align-self-center">
                            UW students experience uncertainty and frustration when using the Husky NightRide and 
                            SafeTrip services at night. This is a problem because the lack of accurate, real-time updates 
                            on ride availability and queue positions disrupts their ability to plan safe and efficient 
                            commutes.
                        </p>
                        <img src="/img/dawgride/nightride-shuttle.jpg" width={350}/>
                    </div>
                </div>

                <div className="content-group">
                    <h3 className="text-center pb-5">Pain Points</h3>
                    <div className="d-md-flex justify-content-between gap-3">
                        <div>
                            <p className="text-center painpoint">Lateness</p>
                            <div style={{height: 250}} className="text-center">
                                <img src="/img/dawgride/late.png" width={250} className="d-inline-block"/>
                            </div>
                            <p className="text-center">NightRide shuttles are often late due to deviations from the fixed route</p>
                        </div>
                        <div>
                            <p className="text-center painpoint">Unintuitive App</p>
                            <div style={{height: 250}} className="text-center">
                                <img src="/img/dawgride/confused.png" width={180} className="d-inline-block"/>
                            </div>
                            <p className="text-center">Current mobile app RideSystems is unintuitive with an outdated interface</p>
                        </div>
                        <div>
                            <p className="text-center painpoint">Low Discoverability</p>
                            <div style={{height: 250}} className="text-center">
                                <img src="/img/dawgride/discover.png" width={200} className="d-inline-block"/>
                            </div>
                            <p className="text-center">Information is only available on the UW website, and is nested across multiple pages.</p>
                        </div>
                    </div>
                </div>
                
                <div className="content-group">
                    <div className="p-5 hmw-container">
                        <h3 className="text-center pb-2" style={{color: "white"}}>How might we...</h3>
                        <p className="text-center hmw-text">provide reliable, real-time updates for UW students using NightRide and SafeCampus 
                            services so that they feel safe and confident staying on campus late at night?</p>
                    </div>
                </div>

                <div className="content-group">
                    <h2 className="mb-5 pb-lg-5 pt-5">Personas</h2>
                    <div className="d-flex flex-column flex-md-row gap-5 justify-content-between">
                        <div className="p-4 persona-container">
                            <div className="text-center">
                                <img src="/img/dawgride/george.png" width={175} className="d-inline-block persona-avatar"/>
                            </div>
                            <h4 className="text-center">George</h4>
                            <p className="m-0 text-center">Age: 18</p>
                            <p className="text-center">Informatics Undergrad</p>
                            <p>Behaviors:</p>
                            <ul className="persona-info">
                                <li>Night Owl</li>
                                <li>Works out late at the IMA</li>
                                <li>Doesn’t like walking long distances, so he often takes the NightRide shuttle</li>
                            </ul>
                            <p>Needs / Wants:</p>
                            <ul className="persona-info">
                                <li>Accurate ETA so he knows when to leave the gym</li>
                                <li>Works out late at the IMA</li>
                                <li>Wants a clear understanding of bus routes and pick-up zones</li>
                            </ul>
                        </div>

                        <div className="p-4 persona-container">
                            <div className="text-center">
                                <img src="/img/dawgride/devin.png" width={175} className="d-inline-block persona-avatar"/>
                            </div>
                            <h4 className="text-center">Devin</h4>
                            <p className="m-0 text-center">Age: 23</p>
                            <p className="text-center">MBA Student</p>
                            <p>Behaviors:</p>
                            <ul className="persona-info">
                                <li>Stays late at Paccar to finish assignments</li>
                                <li>Enjoys hanging out with friends on and off campus</li>
                                <li>Feels unsafe walking late at night</li>
                            </ul>
                            <p>Needs / Wants:</p>
                            <ul className="persona-info">
                                <li>Wants to feel safe commuting to and from her apartment</li>
                                <li>Wants to know her place in the SafeTrip queue</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="content-group">
                    <h2 className="mb-5 pb-lg-3 pt-5">Solution</h2>
                    <div className="d-flex gap-2">
                        <img src="/img/dawgride/nightride.gif" width={"32%"}/>
                        <img src="/img/dawgride/safety.gif" width={"32%"}/>
                        <img src="/img/dawgride/info.gif" width={"32%"}/>
                    </div>
                    <h3 className="pt-5 mt-5 pb-3">Key Features</h3>
                    <ul className="persona-info">
                        <li><strong>Interactive Map:</strong> Displays shuttle routes and stops for better planning.</li>
                        <li><strong>Real-Time Tracking:</strong> Shows live shuttle locations for accurate arrival times.</li>
                        <li><strong>Shuttle Occupancy:</strong> Monitors occupancy of NightRide shuttles.</li>

                        <li><strong>SafeTrip Queue:</strong> Simplifies the process of requesting a SafeTrip ride.</li>
                        <li><strong>Safety Map:</strong> Allows users to report and review suspicious activity on campus.</li>
                        <li><strong>Info/FAQ Section:</strong> Educates users on Husky NightRide, SafeTrip, and DawgRide usage.</li>
                    </ul>
                    <button onClick={() => window.open("https://github.com/achan124/dawgRide", "_blank")} className="mt-5 project-button">GitHub</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
