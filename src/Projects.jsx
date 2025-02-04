
export function Projects() {
    const projectInfo = [
        {
            name: "DawgRide", 
            img: ["/img/dawgRide.png", "dawgRide interface"], 
            techStack: ["HTML", "CSS", "JavaScript", "React.js"],
            dates: "Jan 2024 - Current",
            desc: "App for UW students to safely plan commutes with NightRide and SafeTrip Services",
            linkText: "Coming soon!",
            link: "#"
        },
        {
            name: "Smiski Grove", 
            img: ["/img/smiskiGrove.png", "smiskiGrove interface"], 
            techStack: ["HTML", "CSS", "JavaScript", "React.js"],
            dates: "Sep 2024 - Dec 2024",
            desc: "Platform for Smiski collectors to keep track of and organize their figurines",
            linkText: "View Me",
            link: "https://github.com/achan124/smiski-grove"
        },
        {
            name: "National Park Service", 
            img: ["/img/NPS.png", "national park service interface"], 
            techStack: ["Figma"],
            dates: "Jun 2023 - Aug 2023",
            desc: "Redesign of the National Park Service website",
            linkText: "View Me",
            link: "https://www.figma.com/proto/7VlnJ5hHSkksXOLBohpSRu/UXplorers-Team-Projects?node-id=821-4172&starting-point-node-id=821%3A4172"
        }
    ]

    return (
    <>
        <h2 id="projects">Projects</h2>
        <div className="d-flex flex-column flex-lg-row flex-lg-wrap justify-content-lg-center align-items-center gap-4 projects">
            {projectInfo.map((project, index) => (
                <ProjectCard key={index} project={project}/>
            ))}
        </div>
    </>
    )
}

function ProjectCard({ project }) {
    return (
        <div className="d-flex flex-column bg-white rounded-5 pjCard">
            <div className="mx-auto pt-3">
                <img src={project.img[0]} alt={project.img[1]} />
            </div>
            <div className="p-4 d-flex flex-column flex-grow-1">
                <div className="d-flex gap-1">
                    {project.techStack.map((tech, index) => (
                        <p key={index} className="techStack">{tech}</p>
                    ))}
                </div>
                <h4 className="pt-3">{project.dates}</h4>
                <h3>{project.name}</h3>
                <p className="flex-grow-1">{project.desc}</p>
                <div className="d-flex justify-content-center">
                    <a href={project.link} target="_blank" className="projLink">{project.linkText}</a>
                </div>
            </div>
        </div>
    )

}