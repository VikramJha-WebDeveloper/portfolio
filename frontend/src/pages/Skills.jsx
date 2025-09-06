import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// import section title
import SectionTitle from "../components/SectionTitle";

// import images 
import htmlLogo from "../../public/skills images/html.png"
import cssLogo from "../../public/skills images/css.png"
import javascriptLogo from "../../public/skills images/javascript.png"
import bootstrapLogo from "../../public/skills images/bootstrap-framework.png"
import reactLogo from "../../public/skills images/react.png"
import nodeLogo from "../../public/skills images/nodejs.png"
import expressLogo from "../../public/skills images/express.png"
import mongodbLogo from "../../public/skills images/mongo-db.png"

const SkillSection = styled.div``;

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <SkillSection
        id="contact"
        className={`py-5 d-flex align-items-center justify-content-center`}
      >
        <div className="container py-3">
          <SectionTitle
            title="Technical Skills"
            description="These are the technologies I’ve worked with to build responsive and scalable web applications."
          />
          <div className="row">
            <div
              className="col-12 mt-5 mt-lg-0 d-flex justify-content-center flex-column"
              data-aos="zoom-in"
            >
                <div className="slider-container rounded" style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
            <img src={htmlLogo} style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="text-light">HTML</h5>
            </div>
        </div>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
            <img src={cssLogo} style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="text-light">CSS</h5>
            </div>
        </div>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
            <img src={javascriptLogo} style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="text-light">javaScript</h5>
            </div>
        </div>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
            <img src={bootstrapLogo} style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="text-light">Bootstrap</h5>
            </div>
        </div>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
            <img src={reactLogo} style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="text-light">React.js</h5>
            </div>
        </div>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
            <img src={nodeLogo} style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="text-light">Node.jd</h5>
            </div>
        </div>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
            <img src={expressLogo} style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="text-light">Express.js</h5>
            </div>
        </div>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
            <img src={mongodbLogo} style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="text-light">MongoDB</h5>
            </div>
        </div>
      </Slider>
    </div>
            </div>
          </div>

          
        </div>
      </SkillSection>
    </>
  );
};

export default Skills;
