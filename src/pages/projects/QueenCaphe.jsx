import "./project.css";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer";

export function QueenCaphe() {
    return (
        <div style={{backgroundColor: "white"}} className="queencaphe project">
            <Navbar />
            <h1 className="text-center" style={{color: "#30569F"}}>Queen Caphe</h1>
            <div style={{backgroundColor: "#f7fafc"}} className="d-flex justify-content-center">
                <img src="/img/queencaphe/queenCapheBlue.png" className="header-image"></img>
            </div>

            <div className="content-container">
                <div className="d-flex flex-wrap gap-2">
                    <p className="tech-stack">JavaScript</p>
                    <p className="tech-stack">Node.js</p>
                    <p className="tech-stack">HTML</p>
                    <p className="tech-stack">CSS</p>
                </div>
                <p><strong>Mar 2025 - July 2025</strong></p>
                <p>
                    Informational website for business built through WordPress Elementor. 
                    Integrated with Toast for online ordering.
                </p>

                <div className="content-group">
                    <h2 style={{color: "#30569F"}}>Header</h2>
                    
                </div>

                <div className="content-group">
                    <h2 className="mb-5 pb-lg-3 pt-5 text-center" style={{color: "#30569F"}}>Solution</h2>
                    {/* <div className="mb-5 pb-5">
                        <img src="/img/recipeasy/solution1.png" width={"900"} className="pb-3"/>
                        <img src="/img/recipeasy/solution2.png" width={"900"} className="pb-3"/>
                        <img src="/img/recipeasy/solution3.png" width={"900"}/>
                        <img src="/img/recipeasy/solution4.png" width={"900"} className="pb-3"/>
                        <img src="/img/recipeasy/solution5.png" width={"900"}/>
                    </div> */}

                    <button onClick={() => window.open("https://queencaphe.com/", "_blank")} className="checkout-link mt-5 me-3 project-button">Website</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
