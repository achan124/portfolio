import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='d-flex justify-content-end'>
            <div className="navbar">
                <NavLink to="/home"><p className="ms-xl-2 nav-logo">陳</p></NavLink>
                
                <div className="ms-auto me-2 ham-nav" onClick={toggleMenu}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </div>

                <ul className="gap-5 ms-auto pe-5 reg-nav">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/about">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                
            </div>

            <div className={`${isMenuOpen ? 'd-block' : 'd-none'} hamburger-menu`}>
                <ul className="d-flex flex-column gap-3 hamburger-links">
                    <li><NavLink to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Me</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
        
    )
}

