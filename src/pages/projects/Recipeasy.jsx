import "./project.css";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer";

export function Recipeasy() {
    return (
        <div style={{backgroundColor: "white"}} className="recipeasy project">
            <Navbar />
            <h1 className="text-center" style={{color: "#65881A"}}>recipEASY</h1>
            <div style={{backgroundColor: "#FFF5CD"}} className="d-flex justify-content-center">
                <img src="/img/recipeasy/recipEASYyellow.png" className="header-image"></img>
            </div>

            <div className="content-container">
                <div className="d-flex flex-wrap gap-2">
                    <p className="tech-stack">JavaScript</p>
                    <p className="tech-stack">Node.js</p>
                    <p className="tech-stack">HTML</p>
                    <p className="tech-stack">CSS</p>
                </div>
                <p><strong>Mar 2025 - Jun 2025</strong></p>
                <p>RecipEASY is an application designed for users to minimize their personal food waste by allowing
                    them to easily find, share, and save recipes </p>

                <div className="content-group">
                    <h2 style={{color: "#65881A"}}>Problem Context</h2>
                    <div className="d-flex pt-5">
                        <div className="text-center" style={{width: "45%"}}>
                            <img src="/img/recipeasy/40percent.png" width={200} />
                            <p>40% of all food is wasted globally</p>
                        </div>
                        <div className="text-center" style={{width: "45%"}}>
                            <img src="/img/recipeasy/scale.png" width={200} />
                            <p>Yearly, the US throws away 120 billion lbs of food</p>
                        </div>
                    </div>
                </div>

                <div className="content-group">
                    <h2 style={{color: "#65881A"}}>Project Description</h2>
                    {/* <div className="text-center p-3 pb-5">
                        <img src="/img/recipeasy/fryingpan.png" width={200}/>
                    </div> */}
                    <h3>Who is our target audience?</h3>
                    <p className="p-1 pe-5 align-self-center">
                        Our project is targeted towards anyone who relies on recipes to cook—whether they are cooking enthusiasts, 
                        individuals trying to cut back on dining out, or busy people who often forget what ingredients they have 
                        on hand. We set out to build an application that helps users keep track of the items in their pantry and 
                        discover recipes they can make with those ingredients. Sometimes, deciding what to eat can be time-consuming 
                        and stressful, particularly for students or working professionals with busy schedules. Our app simplifies 
                        this decision-making process, making it easier to maintain consistent and healthy eating habits. 
                        <br></br><br></br>
                        We also aimed to foster a sense of community by allowing users to share and explore recipes posted by others. 
                        This feature is especially beneficial for college students or young adults living on their own for the first 
                        time, who may be new to cooking. By browsing user-submitted recipes, individuals can find inspiration and connect 
                        with others who share similar food preferences or dietary needs.
                    </p>
                    <h3>Why does our audience want to use our application?</h3>
                    <p className="p-1 pe-5 align-self-center">
                        Our audience wants to use our application because it simplifies meal planning and makes cooking at home 
                        more convenient. By allowing users to input the ingredients they already have, the app helps them identify 
                        meals they can prepare without needing to buy additional items. It also introduces them to new recipes 
                        without the hassle of searching manually. This not only saves time and money but also reduces food waste 
                        by helping users keep track of what’s in their kitchen before it expires. Lastly, the app supports a 
                        healthier lifestyle by making it easier to cook at home instead of relying on takeout or processed foods.
                    </p>
                    <h3>Why do we as developers want to build this application?</h3>
                    <p className="p-1 pe-5 align-self-center">
                        As young adults and busy students, we understand the struggles that come with cooking at home, especially 
                        when managing school, work, and limited budgets. We’ve all experienced the disappointment that comes with 
                        having fresh ingredients go to waste just because we didn’t have the time or inspiration to use them. Or, 
                        times where we’ve had one random item in the fridge and no idea what to do with it. As developers, we are 
                        motivated by these shared experiences and want to create a solution that helps others reduce waste, save 
                        money, and be more organized in the kitchen. We envision an application that acts as both a practical tool 
                        and a source of culinary inspiration. By allowing users to track their ingredients and discover recipes 
                        based on what they already have, we remove the stress from daily meal decisions. We also hope to encourage 
                        healthier habits by making home-cooked meals more accessible and less intimidating. Ultimately, we aim to 
                        build something that empowers users of all skill levels to enjoy cooking.
                    </p>
                </div>

                <div className="content-group">
                    <h2 className="text-center pb-5" style={{color: "#65881A"}}>Features</h2>
                    <div className="text-center">
                        <img src="/img/recipeasy/featuresGraphic.png" width={400} />
                    </div>
                    
                    <div className="d-flex flex-wrap justify-content-center gap-5 pt-5">
                        <div style={{width: "45%"}}>
                            <div className="d-flex align-items-center gap-3">
                                <span className="circle-number" style={{backgroundColor: "#B7A57A"}}>1</span>
                                <h4>Authentication</h4>
                            </div>
                            <ul className="list pt-3">
                                <li>Logged-In users can complete user actions</li>
                                <li>Privacy settings</li>
                            </ul>
                        </div>
                        <div style={{width: "45%"}}>
                            <div className="d-flex align-items-center gap-3">
                                <span className="circle-number" style={{backgroundColor: "#EF884B"}}>2</span>
                                <h4>Recipes</h4>
                            </div>
                            <ul className="list pt-3">
                                <li>Users can view all recipes or specific recipe pages</li>
                                <li>Recipes can be saved, commented on, or rated</li>
                                <li>Filter by ingredient feature</li>
                            </ul>
                        </div>
                        <div style={{width: "45%"}}>
                            <div className="d-flex align-items-center gap-3">
                                <span className="circle-number" style={{backgroundColor: "#C5CF5D"}}>3</span>
                                <h4>User Actions</h4>
                            </div>
                            <ul className="list pt-3">
                                <li>Add new recipes to the database</li>
                                <li>Rate and comment on recipes</li>
                                <li>Save recipes to cookbooks</li>
                            </ul>
                        </div>
                        <div style={{width: "45%"}}>
                            <div className="d-flex align-items-center gap-3">
                                <span className="circle-number" style={{backgroundColor: "#E75038"}}>4</span>
                                <h4>Cookbooks</h4>
                            </div>
                            <ul className="list pt-3">
                                <li>All authenticated users have one or more cookbooks</li>
                                <li>Can hold one or more recipes</li>
                            </ul>
                        </div>
                    </div>
                </div>
    

                <div className="content-group">
                    <h2 className="mb-5 pb-lg-5 pt-5" style={{color: "#65881A"}}>Technical Description</h2>
                    <h3 className="pb-3">Architectural Diagram</h3>
                    <img src="/img/recipeasy/architecturalDiagram.png" width={900} />
                    <h3>Data Flow Diagram</h3>
                    <img src="/img/recipeasy/dataflowDiagram.png" width={900} />
                </div>

                <div className="content-group">
                    <h2 className="mb-5 pb-lg-5 pt-5 text-center" style={{color: "#65881A"}}>Backend</h2>
                    <img src="/img/recipeasy/backend.png" width={700} />
                </div>

                <div className="content-group">
                    <h2 className="mb-5 pb-lg-3 pt-5 text-center" style={{color: "#65881A"}}>Solution</h2>
                    <div>
                        <img src="/img/recipeasy/solution1.png" width={"900"} className="pb-3"/>
                        <img src="/img/recipeasy/solution2.png" width={"900"} className="pb-3"/>
                        <img src="/img/recipeasy/solution3.png" width={"900"}/>
                        <img src="/img/recipeasy/solution4.png" width={"900"} className="pb-3"/>
                        <img src="/img/recipeasy/solution5.png" width={"900"}/>
                    </div>

                    <button onClick={() => window.open("https://recipeasy-y11k.onrender.com/", "_blank")} className="mt-5 me-3 project-button">Website</button>
                    <button onClick={() => window.open("https://github.com/jessxiong/recipeasy?tab=readme-ov-file", "_blank")} className="mt-5 project-button">GitHub</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
