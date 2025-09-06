import "./App.css";
import AOS from "aos";
import { useEffect } from "react";

// import theme
import theme from "./styles/theme";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import styled from "styled-components";
import Skills from "./pages/Skills";

const AppSection = styled.div`
  p,
  h2, h1 {
    font-family: "Kanit", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  h2{
    font-weight: 500;
    color: ${theme.colors.secondary}
  }

  h2 + p{
    max-width: 800px;
  }
`;

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <AppSection style={{ background: theme.colors.linearGradient }}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </AppSection>
  );
}

export default App;
