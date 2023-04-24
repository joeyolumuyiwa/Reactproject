import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
// import logo from "../logo.jpg"

const Navbar = () => {
  return (
    <div>
      <ul>
        <Router>
          <nav>
        <Link to="about">About</Link>      
        <Link to="project">Project</Link>
        <Link to="contact">Contact</Link>

        <div> <a href="../public/images/logo.jpg" title="Free Online Logo Maker">
          </a></div>      
        </nav>
        <main>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="contact" element={<Contact />} />

          </Routes>
          </main>
        </Router>
       
      </ul>
      
    </div>
  );
};

export default Navbar;
