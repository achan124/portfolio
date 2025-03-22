import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ProjectPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
               
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
