import "./PersonalizeSectionStyle.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import personalizedimg from "../../assets/personalized-img.jpg";

const PersonalizeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Container fluid className="personalized-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="personalized-img-section">
              <img
                src={personalizedimg}
                width="99%"
                className="personalized-img"
              />
            </div>
          </Col>
          <Col xs={12} md={6} className="platform-text">
            <div style={{ paddingInline: "10%" }} data-aos="fade-up">
              <h2 className="section-heading">
                Personalize your value acceleration
              </h2>
              <p className="section-text">
                Maximize your investment with ServiceNow Impact. Realize value
                faster with experts on demand, premium support, and preventive
                tools to guide your digital transformation.
              </p>
              <OutlinedButton
                onClick={() => AOS.init({ duration: 1000 })}
                text="Find Out How"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonalizeSection;
