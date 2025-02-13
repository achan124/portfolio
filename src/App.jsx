import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage.jsx" 
import { ProjectPage } from "./ProjectPage.jsx"

// const projectInfo = [
//   {
//       name: "DawgRide", 
//       img: ["/img/dawgRide.png", "dawgRide interface"], 
//       techStack: ["HTML", "CSS", "JavaScript", "React.js"],
//       dates: "Jan 2024 - Current",
//       desc: "App for UW students to safely plan commutes with NightRide and SafeTrip Services",
//       link: "#",
//       isLinkReady: false
//   },
//   {
//       name: "Smiski Grove", 
//       img: ["/img/smiskiGrove.png", "smiskiGrove interface"], 
//       techStack: ["HTML", "CSS", "JavaScript", "React.js"],
//       dates: "Sep 2024 - Dec 2024",
//       desc: "Platform for Smiski collectors to keep track of and organize their figurines",
//       link: "https://github.com/achan124/smiski-grove",
//       isLinkReady: true
//   },
//   {
//       name: "National Park Service", 
//       img: ["/img/NPS.png", "national park service interface"], 
//       techStack: ["Figma"],
//       dates: "Jun 2023 - Aug 2023",
//       desc: "Redesign of the National Park Service website",
//       link: "https://www.figma.com/proto/7VlnJ5hHSkksXOLBohpSRu/UXplorers-Team-Projects?node-id=821-4172&starting-point-node-id=821%3A4172",
//       isLinkReady: true
//   }
// ]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

