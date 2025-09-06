import React from "react";
import styled from "styled-components";

// import theme
import theme from "../styles/theme";

// import section title
import SectionTitle from "../components/SectionTitle";

const ContactSection = styled.div`
  overflow: hidden;

  .form-container{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }


}

`;

const Contact = () => {
  return (
    <>
      <ContactSection
        id="contact"
        className={`py-5 d-flex align-items-center justify-content-center`}
      >
        <div className="container py-3">
          <SectionTitle title="Contact Me" description="Have a project, question, or just want to connect? Feel free to reach out — I’d love to hear from you!"/>
          <div className="row">
            <div
              className="col-12 mt-5 mt-lg-0 d-flex justify-content-center flex-column"
              data-aos="zoom-in"
            >
              <div className="form-container container py-5 mb-5 rounded bg-light overflow-hidden">
                <div className="row">
                  <div className="col col-12">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          placeholder="Your Message"
                          id="message"
                          rows="4"
                        ></textarea>
                        
                      </div>
                      <button type="submit" className="btn text-light" style={{backgroundColor: `${theme.colors.primary}`}}>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContactSection>
      <iframe
        className="w-100"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6987.379922913668!2d77.0793742!3d28.877838500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757051221840!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
