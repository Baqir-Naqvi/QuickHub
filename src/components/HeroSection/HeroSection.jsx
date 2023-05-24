import "./HeroStyle.css";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
// import heroImg from "../../assets/quickHub1.png"
import heroImg from "../../assets/hero-img.png"

function HeroSection() {
  return (
    <>
      <Container fluid className="main-container m-0 p-0">
        <Row className="m-0 p-0">
          <Col 
          md={6} lg={6} xl={6} className="p-x-0">
          
            <div className="hero-container">
              <h4 className="toptitle">
                <Typewriter
                  cursor
                  cursorStyle="_"
                  typeSpeed={150}
                  words={["Who are we?"]}
                />
              </h4>
              {/* <h1 className="comptitle">QuickHub</h1> */}
              <p className="whoweare">
                Enriching the HR experience for small and medium enterprises.
                <br />
                QuickHub provides the cloud platform with a single aim of
                enhancing productivity,
                <br /> delivering quick on-hand analytics, and making HR
                experience agile and adhoc. <br />
                You want to start small and scale up, this is the right platform
                for you.
              </p>
              <Button className="Herobutton">
                Apply here
                {/* <AiOutlineArrowRight
                  className="arrow"
                  fill="black"
                  size="1.5rem"
                /> */}
              </Button>
              <p className="whoweare">
                Already have an account? <a href="/login">Login here</a>
              </p>
            </div>
          </Col>
          <Col className="p-x-0 m-0"
           md={6} lg={6} xl={6}
          >
          <div className="hero-img" >
              <img src={heroImg} alt="hero-img" />
          </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSection;
