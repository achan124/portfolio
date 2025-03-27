import "./styles.css"
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

import { Homepage } from "./pages/Homepage" 
import { ProjectPage } from "./pages/ProjectPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

import { DawgRide } from "./pages/projects/DawgRide";
import { SmiskiGrove } from "./pages/projects/SmiskiGrove";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Homepage />} />
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/dawgride" element={<DawgRide />} />
        <Route path="/smiski" element={<SmiskiGrove />} />
      </Routes>
    </BrowserRouter>
  )
}

