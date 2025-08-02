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
                    <p className="tech-stack">Wordpress</p>
                </div>
                <p><strong>Mar 2025 - Present</strong></p>
                <p>
                    Informational website for a small, family-owned business built through WordPress Elementor. 
                    Integrated with Toast for online ordering.
                </p>

                <div className="content-group">
                    <h2 style={{color: "#30569F"}}>Design Audit</h2>
                    <p>
                        The owner of Queen Caphe, Valerie, expressed dissatisfaction with the website's current design. 
                        She felt that the website did not accurately represent her business as it was overloaded with irrelevant 
                        information, and used photos that were not up to her standards.
                    </p><br></br>
                    <h3>Previous Design</h3>
                    <img src="/img/queencaphe/QCDesignAudit.png" width={750}></img>
                    <p>After talking with Valerie to understand her vision for the website, we came up with three core principles
                        to follow while redesigning:   
                    </p>
                    <ol>
                        <li><strong>Keep things clean</strong></li>
                            <ul><li>Ensure information is relevant, uncluttered, and clear to understand</li></ul>
                        <li><strong>Simplicity is key</strong></li>
                        <ul><li>
                            As a food retailer, users who visit the site are there for a specific purpose (e.g. learning
                            about the business, or potentially purchasing from them). The website should be catered to 
                            these use cases.
                        </li></ul>
                        <li><strong>Be inviting</strong></li>
                        <ul><li>The design should invite users to explore further. Provding comfort and ease 
                            through it's simplicity. </li></ul>  
                    </ol>
                </div>
                <div className="content-group">
                    <h2 style={{color: "#30569F"}}>Moodboard</h2>
                    <img src="/img/queencaphe/moodboard.png" width={750} className="pt-5"></img>
                </div>

                <div className="content-group">
                    <h2 style={{color: "#30569F"}}>Solution</h2>
                    <img src="/img/queencaphe/solutionpic1.png" width={750} className="pt-5"></img>
                    <img src="/img/queencaphe/solutionpic2.png" width={750} className="pt-3"></img>
                    <img src="/img/queencaphe/solutionpic3.png" width={750} className="pt-3"></img>
                    <img src="/img/queencaphe/solutionpic4.png" width={750} className="pt-3"></img>
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
