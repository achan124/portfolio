
export function Projects() {
    const projectInfo = [
        {
            name: "DawgRide", 
            img: ["/img/dawgRide.png", "dawgRide interface"], 
            techStack: ["HTML", "CSS", "JavaScript", "React.js"],
            dates: "Coming Soon!",
            desc: "App for UW students to safely plan commutes with NightRide and SafeTrip Services"
        },
        {
            name: "Smiski Grove", 
            img: ["/img/smiskiGrove.png", "smiskiGrove interface"], 
            techStack: ["HTML", "CSS", "JavaScript", "React.js"],
            dates: "Sep 2024 - Dec 2024",
            desc: "Platform for Smiski collectors to keep track of and organize their figurines"
        },
        {
            name: "National Park Service", 
            img: ["/img/NPS.png", "national park service interface"], 
            techStack: ["Figma"],
            dates: "Jun 2023 - Aug 2023",
            desc: "Redesign of the National Park Service website"
        }
    ]

    return (
    <>
        <h2 id="projects">Projects</h2>
        <div className="projectCards">
            {projectInfo.map((project, index) => (
                <ProjectCard key={index} project={project}/>
            ))}
        </div>
    </>
    )
}

function ProjectCard({ project }) {
    return (
        <div className="pjCard">
            <div className="pjCardImg">
                <img src={project.img[0]} alt={project.img[1]} />
            </div>
            <div className="pjCardInfo">
                <div className="techStack">
                    {project.techStack.map((tech, index) => (
                        <p key={index}>{tech}</p>
                    ))}
                </div>
                <h4>{project.dates}</h4>
                <h3>{project.name}</h3>
                <p className="pjDesc">{project.desc}</p>
            </div>
        </div>
    )

}