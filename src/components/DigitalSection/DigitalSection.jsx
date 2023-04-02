import "./DigitalSectionStyle.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import bimbo from "../../assets/bamboo.png";

const DigitalSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Container fluid className="digital-container">
        <Row>
          <Col xs={12} md={6} className="platform-text">
            <div style={{ paddingInline: "10%" }} data-aos="fade-up">
              <h2 className="section-heading">
                Digital efficiency brings bread to the world
              </h2>
              <p className="section-text">
                With data-driven insights from over 200 bread-making facilities,
                Grupo Bimbo raises quality control on a global scale.
              </p>
              <div className="all-stories" style={{ marginTop: 40 }}>
                <OutlinedButton
                  className="btn-color"
                  style={{ color: "white" }}
                  onClick={() => AOS.init({ duration: 1000 })}
                  text="Read Story"
                />
                <div className="all-stories" style={{ marginLeft: 20 }}>
                  <p className="all-stories-text">View All Stories</p>
                  <span className="arrow-svg-container">
                    <svg
                      className="arrow-svg"
                      viewBox="0 0 28 13"
                      style={{ transform: "translate(0.000000, 1.000000)" }}
                      transform="translate(0.000000, 1.000000)"
                      fill="none"
                    >
                      <path
                        d="M0,5.3 L25,5.3"
                        id="Stroke-1"
                        stroke="currentcolor"
                      ></path>
                      <polyline
                        id="Stroke-3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentcolor"
                        points="22 2 26 5 22 9"
                      ></polyline>
                      <polyline
                        id="Stroke-3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentcolor"
                        points="22 1 26 5 22 10"
                      ></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="digital-img-section">
              <img src={bimbo} width="99%" className="digital-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalSection;
