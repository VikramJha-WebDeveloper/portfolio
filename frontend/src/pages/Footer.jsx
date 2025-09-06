import React from "react";
import styled from "styled-components";

// import react-cicons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// import theme
import theme from "../styles/theme";

const FooterSection = styled.div`
a{
  transition-duration: 0.5s;
}
  a:hover{
  color: #106881ff !important;
  }
`

const Footer = () => {
    return(
        <FooterSection>
    <footer className="text-center py-4" style={{ background: "#0f0f0f", color: "#fff" }}>
  <h5>Vikram Jha</h5>

  <div className="my-3">
    <a className="fs-3" href="https://github.com/VikramJha-WebDeveloper" target="_blank" style={{ margin: '0 10px', color: `${theme.colors.primary}` }}>
      <FaGithub />
    </a>
    <a className="fs-3" href="https://www.linkedin.com/in/vikram-jha-3a9486249/" target="_blank" style={{ margin: '0 10px', color: `${theme.colors.primary}` }}>
      <FaLinkedin />
    </a>
    <a className="fs-3" href="https://www.instagram.com/vikramjha572/" target="_blank" style={{ margin: '0 10px', color: `${theme.colors.primary}` }}>
      <FaInstagram />
    </a>
  </div>

  <p style={{ fontSize: "0.9rem", margin: 0 }}>
    © 2025 Vikram Jha. All rights reserved.
  </p>
</footer>
</FooterSection>

    );
};

export default Footer;