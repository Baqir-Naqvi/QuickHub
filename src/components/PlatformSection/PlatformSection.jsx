import "./PlatformSectionStyle.css";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import heroImg from "../../assets/platform-img.png";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
const PlatformSection = () => {
  return (
    <div>
      <Container fluid className="platform-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="platform-img-section">
              <img src={heroImg} width="99%" className="platform-img" />
            </div>
          </Col>
          <Col className="platform-text">
            <div style={{ paddingInline: "10%" }}>
              <h2>The platform of platforms</h2>
              <p>
                Behind every great experience is a great workflow. As the
                foundation for all digital workflows, the Now Platform® connects
                people, functions, and systems across your organization.
              </p>
              <OutlinedButton text="Explore Platform" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlatformSection;
