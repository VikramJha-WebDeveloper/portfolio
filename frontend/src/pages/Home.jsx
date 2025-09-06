import React, { useState } from "react";
import styled from "styled-components";

// import react icons
import { FaArrowRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

// import images
import heroImg from "/Home images/Code typing-amico.png";

// import theme
import theme from "../styles/theme";

const HomeSection = styled.div`
  overflow: hidden;
  
  img{
    animation-name: animateHeroImage;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    position: relative;
    width: 90%;
  }

  @keyframes animateHeroImage{
    0%{
      top: 0;
    }
    50%{
      top: 10px;
    }
    100%{
      top: 0;
    }
  }
`

const Home = () => {
  let [count, setCount] = useState(0);
  let [professionColor, setProfessionColor] = useState(theme.colors.secondary)
    setTimeout(()=>{
      setCount(count+1);
      if(count===0){
        setProfessionColor(theme.colors.secondary)
      }else if(count===1){
        setProfessionColor("orange");
        setCount(0);
      }
    }, 500);
    return(
        <HomeSection id="home" className="position-relative d-flex align-items-center" style={{minHeight: "calc(100vh - 56px)"}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col h-100 col-12 col-md-6 d-flex justify-content-center flex-column order-2 order-md-1" data-aos="fade-right">
                    <h1 style={{color: theme.colors.textLight}} className="mt-5 mt-md-0 fw-medium">Hi, I’m Vikram Jha | <span style={{color: professionColor}}>MERN Stack Developer</span></h1>
                    <p style={{color: theme.colors.textLight}} className="my-3">A passionate web developer who loves turning ideas into responsive and user-friendly websites.</p>
                    <div className="d-flex">
                    <a href="#projects"className="btn text-light" style={{background: theme.colors.primary}}>View Projects <FaArrowRight /></a>
                    <a href="#contact"className="btn ms-2 text-light" style={{background: theme.colors.tertiary}}>Contact Me <FaLink /></a>
                    </div>
                </div>
                <div className="col col-12 col-md-6 order-1 order-md-2 h-100 d-flex align-items-center justify-content-center position-relative" data-aos="fade-left">
                    <img src={heroImg}/>
                </div>
            </div>
        </div>
        </HomeSection>
    );
};

export default Home;