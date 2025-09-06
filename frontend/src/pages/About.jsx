import React from "react";
import styled from "styled-components";

// import react icons
import { FaDownload } from "react-icons/fa";

// import theme
import theme from "../styles/theme";

// import images
import vikramJhaImage from "/About images/myCropedPic.jpg"

// import resume
import resume from "/resume.pdf"

const AboutSection = styled.div`
  overflow: hidden;
  min-height: 100vh;
  img {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  };

  @media screen and (max-width: 433px){
    img{
      width: 300px !important;
    }
  }
`;

const About = () => {
  return (
    <AboutSection
      id="about"
      className={`py-5 d-flex align-items-center justify-content-center`}
      style={{ color: theme.colors.textLight }}
    >
      <div className="container py-3">
        <div className="row">
          <div
            className="col-12 col-lg-6 d-flex justify-content-center flex-column"
            data-aos="fade-right"
          >
            <img
              src={vikramJhaImage}
              className="mx-auto rounded"
              style={{ width: "370px" }}
            />
          </div>
          <div
            className="about-col col-12 col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center flex-column"
            data-aos="fade-left"
          >
            <h2>About Me</h2>
            <p>Let me introduce myself</p>
            <hr />

            <p>
              Hi! I’m <strong>Vikram Jha</strong>, a passionate web developer
              focused on building clean, responsive, and modern websites using
              the <strong>MERN stack</strong>. I love solving real-world
              problems through code and constantly learning new technologies.
            </p>

            <p>
              I enjoy turning complex ideas into simple, beautiful, and
              intuitive web interfaces. Whether it's creating a sleek landing
              page or a full-stack app, I bring creativity and precision to
              every project.
            </p>

            <ul className="list-unstyled">
              <li>🌐 MERN Stack Developer</li>
              <li>⚛️ React.js & Bootstrap Lover</li>
              <li>🧠 Quick Learner & Problem Solver</li>
            </ul>
<a href={resume}
              className="btn text-light fw-bolder"
              style={{ background: theme.colors.primary, width: "170px"}}
              target="_blank"
            >
              Download CV <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
