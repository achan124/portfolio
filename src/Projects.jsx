
export function Projects() {
    const projectInfo = [
        {
            name: "DawgRide", 
            img: ["/img/dawgRide.png", "dawgRide interface"], 
            techStack: ["HTML", "CSS", "JavaScript", "React.js"],
            dates: "Jan 2024 - Current",
            desc: "App for UW students to safely plan commutes with NightRide and SafeTrip Services",
            link: "#",
            isLinkReady: false
        },
        {
            name: "Smiski Grove", 
            img: ["/img/smiskiGrove.png", "smiskiGrove interface"], 
            techStack: ["HTML", "CSS", "JavaScript", "React.js"],
            dates: "Sep 2024 - Dec 2024",
            desc: "Platform for Smiski collectors to keep track of and organize their figurines",
            link: "https://github.com/achan124/smiski-grove",
            isLinkReady: true
        },
        {
            name: "National Park Service", 
            img: ["/img/NPS.png", "national park service interface"], 
            techStack: ["Figma"],
            dates: "Jun 2023 - Aug 2023",
            desc: "Redesign of the National Park Service website",
            link: "https://www.figma.com/proto/7VlnJ5hHSkksXOLBohpSRu/UXplorers-Team-Projects?node-id=821-4172&starting-point-node-id=821%3A4172",
            isLinkReady: true
        }
    ]

    return (
        <>
            <h2 id="projects" className="mt-5 pt-5">Projects</h2>
            <div className="mb-5 pb-5">
                {projectInfo.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
                <div className="d-flex justify-content-end mt-3">
                    <a href='#' target="_blank">See all projects</a>
                </div>
            </div>
        </>
    )
}

function ProjectCard({ project }) {
    return (
        <div className="mt-4 p-4 projectCard">

            <div className="d-xxl-flex gap-3 justify-content-between">
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
                <div className="d-flex flex-wrap gap-3 row-gap-0">
                    {project.techStack.map((tech, index) => (
                        <p key={index} className="techStack">{tech}</p>
                    ))}
                </div>
                {project.isLinkReady ?   
                    (<a href={project.link} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00DAC6" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>) : "Coming Soon!"}
            </div>

        </div>
    )
}