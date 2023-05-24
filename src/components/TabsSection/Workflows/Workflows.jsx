import "./WorkflowsStyle.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OutlinedButton from "../../OutlinedButton/OutlinedButton";
import itwrkflowimg from "../../../assets/it-workflows.jpg";
import AOS from "aos";

const Workflows = ({ subTitle, title, details, imgUrl }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Container fluid className="itworkflow-container">
        <Col>
              <Row>
                 <div className="itworkflow-img-section" data-aos="fade-down">
                  <img src={imgUrl} className="itworkflow-img" />
                </div>
              </Row>
          <Row className="platform-text">
            <div style={{ paddingInline: "5%",marginTop:"10%" }} data-aos="fade-up">
              <b>{subTitle}</b>
              <h2 className="section-heading">{title}</h2>
              <p className="section-text">{details}</p>
              <OutlinedButton
                onClick={() => AOS.init({ duration: 1000 })}
                text="Get Details"
              />
            </div>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Workflows;
