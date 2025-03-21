import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="d-flex gap-5 ms-auto pe-5">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/about">About Me</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}