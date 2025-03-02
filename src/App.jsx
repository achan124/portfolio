import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage.jsx" 
import { ProjectPage } from "./ProjectPage.jsx"

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

