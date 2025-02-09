
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
            <h2 id="projects" className="mt-5">Projects</h2>
            <div className="mb-5 pb-5">
                {projectInfo.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </>
    )
}

function ProjectCard({ project }) {
    return (
        <div className="mt-4 p-4 projectCard">

            <div className="d-flex gap-3 justify-content-between">
              <div>
                <h4>{project.dates}</h4>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
              </div>

              <div className="">
                <img src={project.img[0]} alt={project.img[1]} />
              </div>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <div className="d-flex gap-3">
                    {project.techStack.map((tech, index) => (
                        <p key={index} className="techStack">{tech}</p>
                    ))}
                </div>
                <a href={project.link} target="_blank">link</a>
            </div>

        </div>
    )
}