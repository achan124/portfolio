export const projectData = [
    {
        name: "DawgRide", 
        img: ["/img/dawgRide.png", "dawgRide interface"], 
        techStack: ["HTML", "CSS", "JavaScript", "React.js"],
        dates: "Jan 2024 - Current",
        desc: "App for UW students to safely plan commutes with NightRide and SafeTrip Services",
        link: "#",
        isLinkReady: false,
        isKeyProject: false
    },
    {
        name: "MBTI Personality Test", 
        img: ["/img/mbti.png", "mbti interface"], 
        techStack: ["HTML", "CSS", "React.js"],
        dates: "Feb 2024",
        desc: "Recreation of the MBTI test",
        link: "https://github.com/achan124/MBTI-personality-test",
        isLinkReady: true,
        isKeyProject: false
    },
    {
        name: "Smiski Grove", 
        img: ["/img/smiskiGrove.png", "smiskiGrove interface"], 
        techStack: ["HTML", "CSS", "JavaScript", "React.js"],
        dates: "Sep 2024 - Dec 2024",
        desc: "Platform for Smiski collectors to keep track of and organize their figurines",
        link: "https://smiski-grove.web.app",
        isLinkReady: true,
        isKeyProject: true
    },
    {
        name: "National Park Service", 
        img: ["/img/NPS.png", "national park service interface"], 
        techStack: ["Figma"],
        dates: "Jun 2023 - Aug 2023",
        desc: "Redesign of the National Park Service website",
        link: "https://www.figma.com/design/lWi8cAyRF5wNMBWhfJa9NA/National-Park-Service-Redesign?node-id=1-286&t=ImUpkzgLnNlxtZ1D-1",
        isLinkReady: true,
        isKeyProject: true
    }
  ]

export function ProjectCardContent({project}) {
    return (
        <>
            <div className="d-xxl-flex gap-3 justify-content-between">
            <div>
                <h4>{project.dates}</h4>
                <h3>{project.name}</h3>
                <p className="mt-3">{project.desc}</p>
            </div>

            <div className="">
                <img src={project.img[0]} alt={project.img[1]} />
            </div>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <div className="d-flex flex-wrap gap-3 row-gap-0">
                    {project.techStack.map((tech, index) => {
                        let color = "";

                        if (tech.includes("HTML")) {
                            color = "html";
                        } else if (tech.includes("CSS")) {
                            color = "css";
                        } else if (tech.includes("JavaScript")) {
                            color = "javascript";
                        } else if (tech.includes("React")) {
                            color = "react";
                        } else if (tech.includes("Figma")) {
                            color = "figma";
                        }

                        return (
                            <p key={index} className={`techStack ${color}`}>{tech}</p>
                        )
                    })}
                </div>
                {project.isLinkReady ?   
                    (<a href={project.link} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff79" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>) : "Coming Soon!"}
            </div>
        </>
    )
}