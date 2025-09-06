import React from "react";
import styled from "styled-components";

// import react icons
import { FaCode } from "react-icons/fa6";

// import theme
import theme from "../styles/theme";

// import images
import yummyPic from "/Project images/yummy website.png";
import educationPic from "/Project images/education.png";
import aitech from "/Project images/AItech.png";
import todo from "/Project images/todo.png";
import SectionTitle from "../components/SectionTitle";

const ProjectSection = styled.div`
  overflow: hidden;
  min-height: 100vh;

  .card{
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background-color: ${theme.colors.quaternary}
  };
`;

const Projects = () => {
  const projects = [
    {
      image: yummyPic,
      title: "Yummy",
      description: `A frontend-heavy MERN project featuring user registration and login. Authentication is handled via backend, restricting access to logged-in users only. The site uses AOS animations for engaging scroll effects.`,
      websiteLink: "https://mern-yummy.onrender.com",
      codeLink: "https://github.com/VikramJha-WebDeveloper/MERN-yummy.git"
    },
    {
      image: todo,
      title: "Toto App",
      description: `A MERN-based Todo app where users must register and log in to access features. Authenticated users can create, update, delete, and mark tasks as completed.`,
      websiteLink: "https://mern-todo-list-frontend-2a8o.onrender.com",
      codeLink: "https://github.com/VikramJha-WebDeveloper/MERN-todo-list.git"
    },
    {
      image: educationPic,
      title: "Education",
      description: `A React-based frontend website featuring AOS scroll animations. This is a responsive, animated site built to demonstrate design and layout skills using placeholder content.`,
      websiteLink: "https://vikramjha-webdeveloper.github.io/Education/",
      codeLink: "https://github.com/VikramJha-WebDeveloper/Education.git"
    },

    {
      image: aitech,
      title: "AI tech",
      description:`A React frontend project showcasing modern design and smooth scroll animations using AOS. The site uses dummy content and focuses on UI/UX presentation.`,
      websiteLink: "https://vikramjha-webdeveloper.github.io/AI-Tech/",
      codeLink: "https://github.com/VikramJha-WebDeveloper/AI-Tech.git"
    },
  ];
  return (
    <ProjectSection
      id="projects"
      className={`py-5`}
      style={{ color: theme.colors.textLight }}
    >
      <div className="container py-3">
        <SectionTitle title="Projects" description="My portfolio includes both fullstack and frontend-only projects built during my learning journey. These projects demonstrate my ability to work with the MERN stack, create responsive layouts, and add interactive animations using libraries like AOS."/>
        <div className="row mt-3 g-5" data-aos="zoom-in">
          {projects.map((website, index) => (
            <div key={index} className="col col-12 col-sm-6 col-lg-4 col-xl-3 d-flex">
              <div
                className="card mx-auto overflow-hidden border-0 bg-dark text-light"
                
              >
                <img
                  src={website.image}
                  className="card-img-top"
                  target="_blank"
                  alt="..."
                  data-aos="fade-left"
                />
                <div className="card-body" data-aos="fade-right">
                  <h5 className="card-title">{website.title}</h5>
                  <p className="card-text" style={{color: "#b9b6b6"}}>{website.description}</p>
                  <a
                    href={website.websiteLink}
                    className="btn text-light"
                    target="_blank"
                    style={{ background: theme.colors.tertiary }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={website.codeLink}
                    className="btn ms-2"
                    target="_blank"
                    style={{ background: theme.colors.secondary, color: theme.colors.textLight }}
                  >
                    Code <FaCode />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectSection>
  );
};

export default Projects;
