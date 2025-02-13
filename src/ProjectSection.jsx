import { ProjectCardContent, projectData } from "./ProjectCardContent.jsx"

export function ProjectSection() {
    const displayProjects = projectData.filter((p) => {
        return (
            p.isLinkReady === true && p.isKeyProject === true
        )
    })
    
    return (
        <>
            <h2 id="projects" className="mt-5 pt-5">Projects</h2>
            <div className="mb-5 pb-5">
                {displayProjects.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
                <div className="d-flex justify-content-end mt-3">
                    <a href='./projects'>all projects</a>
                </div>
            </div>
        </>
    )
}

function ProjectCard({ project }) {
    return (
        <div className="mt-4">
            <div className="cardContainer">
                <div className="p-4 projectCard">
                    <ProjectCardContent project={project}/>
                </div>
            </div>
        </div>
    )
}