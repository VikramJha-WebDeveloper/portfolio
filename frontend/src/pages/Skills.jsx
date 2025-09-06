import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

// import section title
import SectionTitle from "../components/SectionTitle";

// import images
import htmlLogo from "/skills images/html.png";
import cssLogo from "/skills images/css.png";
import javascriptLogo from "/skills images/javascript.png";
import bootstrapLogo from "/skills images/bootstrap-framework.png";
import reactLogo from "/skills images/react.png";
import nodeLogo from "/skills images/nodejs.png";
import expressLogo from "/skills images/express.png";
import mongodbLogo from "/skills images/mongo-db.png";
import bgImage from "/skills images/bgImage.jpg"

const SkillSection = styled.div`
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.9)), url(${bgImage});
  background-attachment: fixed;
`;

const Skills = () => {
  return (
    <>
      <SkillSection
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
              <Swiper style={{width: "100%"}}
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 0, 
        disableOnInteraction: false,
      }}
      speed={4000}         
      allowTouchMove={true}
      grabCursor={true}
      cssMode={false}

      breakpoints={{
    1200: { slidesPerView: 5 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 2 },
  }}
    >
      <SwiperSlide>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
                    <img src={htmlLogo} style={{ width: "100%" }} />
                    <div className="card-body">
                      <h5 className="text-light">HTML5</h5>
                    </div>
                  </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
                    <img src={cssLogo} style={{ width: "100%" }} />
                    <div className="card-body">
                      <h5 className="text-light">CSS3</h5>
                    </div>
                  </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
                    <img src={javascriptLogo} style={{ width: "100%" }} />
                    <div className="card-body">
                      <h5 className="text-light">JavaScript</h5>
                    </div>
                  </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
                    <img src={bootstrapLogo} style={{ width: "100%" }} />
                    <div className="card-body">
                      <h5 className="text-light">Bootstrap</h5>
                    </div>
                  </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
                    <img src={reactLogo} style={{ width: "100%" }} />
                    <div className="card-body">
                      <h5 className="text-light">React.jS</h5>
                    </div>
                  </div>
      </SwiperSlide>
      <SwiperSlide>
<div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
                    <img src={nodeLogo} style={{ width: "100%" }} />
                    <div className="card-body">
                      <h5 className="text-light">Node.jS</h5>
                    </div>
                  </div>
      </SwiperSlide>
      <SwiperSlide>
<div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
                    <img src={expressLogo} style={{ width: "100%" }} />
                    <div className="card-body">
                      <h5 className="text-light">Express.jS</h5>
                    </div>
                  </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card d-flex align-items-center justify-content-center bg-transparent border-0 p-5">
                    <img src={mongodbLogo} style={{ width: "100%" }} />
                    <div className="card-body">
                      <h5 className="text-light">MongoDB</h5>
                    </div>
                  </div>
      </SwiperSlide>
    </Swiper>
            </div>
          </div>
        </div>
      </SkillSection>
    </>
  );
};

export default Skills;
