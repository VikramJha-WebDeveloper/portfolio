import "./App.css";
import AOS from "aos";
import { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
      AOS.init({ duration: 1000 });
    }, 2000); 
  }, []);
  return (
    isLoading?<div className="vh-100 d-flex align-items-center justify-content-center" style={{color: theme.colors.primary}}><div class="spinner-border" style={{width: "3rem", height: "3rem", role: "status"}}>
  <span class="visually-hidden">Loading...</span>
</div>
</div>:
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
