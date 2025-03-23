import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ProjectPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                <h1 style={{fontSize: 50}} className="text-center">My Projects</h1>

                <div className="d-flex flex-wrap justify-content-center gap-5 m-5 pt-5">
                    <a href="#" className="imgBox">
                        <div>
                            <img src=".././public/img/dawgRide.png" alt="DawgRide project mockup"/>
                            <div className="overlay">
                                <span>DawgRide</span>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="imgBox">
                        <div>
                            <img src=".././public/img/smiskiGrove.png" alt="Smiski Grove project mockup"/>
                            <div className="overlay">
                                <span>Smiski Grove</span>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            <Footer />
        </div>
    )
}

// import { ProjectCardContent, projectData } from "./ProjectCardContent.jsx"

// export function ProjectPage() {
//     return (
//         <div>
//             <h1 id="projects" className="m-5 text-center">Projects</h1>
//             <div className="mb-5 mx-5 pb-5">
//                 <div>
//                     {projectData.map((project, index) => (
//                         <ProjectCard key={index} project={project}/>
//                     ))}
//                 </div>
//             </div>
//         </div>    
//     )
// }

// function ProjectCard({ project }) {
//     return (
//         <div className="p-4 mb-3 m-auto projectCard ppage">
//             <ProjectCardContent project={project}/>
//         </div>
//     )
// }
