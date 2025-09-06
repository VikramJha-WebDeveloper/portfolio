import React, {useState} from "react";
import styled from "styled-components";

// import react icons
import { FaDownload } from "react-icons/fa";

// import theme
import theme from "../styles/theme";

// import images
import logo from "/web-logo.png";

const NavSection = styled.div`
   z-index: 1;
  .active{
    background: ${theme.colors.primary};
    color: white !important;
  }
`

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");

  const visitPage = (page) => {
    console.log(page)
    setIsActive(page);
  }
  return (
    <NavSection className="position-sticky w-100 top-0">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary overflow-hidden"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bolder d-flex align-items-center jutify-content-center text-dark"
            href="#"
          >
            {" "}
            <img src={logo} style={{ width: "50px" }}></img>
            <span style={{ color: `${theme.colors.secondary}` }}>MERN</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-0 me-lg-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link rounded px-3 ${isActive === "home"?"active":""}`} aria-current="page" href="#home" onClick={()=>visitPage("home")}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link rounded px-3 ${isActive === "about"?"active":""}`}  href="#about" onClick={()=>visitPage("about")}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link rounded px-3 ${isActive === "projects"?"active":""}`}  href="#projects" onClick={()=>visitPage("projects")}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link rounded px-3 ${isActive === "contact"?"active":""}`}  href="#contact" aria-disabled="true" onClick={()=>visitPage("contact")}>
                  Contact
                </a>
              </li>
            </ul>
            <a href="../../public/myResume.pdf"
              className="btn text-light fw-bolder"
              style={{ background: theme.colors.tertiary}}
              target="_blank"
            >
              Download CV <FaDownload />
            </a>
          </div>
        </div>
      </nav>
    </NavSection>
  );
};

export default Navbar;
