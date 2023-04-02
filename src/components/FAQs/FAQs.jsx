import React from "react";
import Faq from "react-faq-component";
import { FAQsData } from "../../data/FeaturesData";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./faqstyle.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiMessageSquare } from "react-icons/fi";
export default function FAQs() {
  return (
    <div>
      <h2 className="quicktitle">
        Frequently <br />
        <span style={{ color: "#fff" }}>Asked Questions</span>
      </h2>
      <Row className="faqrow">
        <Col lg={7} md={6} sm={12}>
          <div className="faq-style-wrapper">
            <Faq
              data={FAQsData}
              styles={{
                bgColor: "white",
                titleTextColor: "black",
                rowTitleColor: "black",
                rowContentColor: "grey",
                arrowColor: "black",
                rowTitleTextSize: "20px",
                rowContentTextSize: "16px",
                rowContentPaddingTop: "10px",
              }}
            />
          </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Card className="card">
            <FiMessageSquare className="icon" size={80} fill="#000" />
            <Card.Title>Do you have more questions?</Card.Title>
            <Card.Body>
              End-to-end payments and financial <br />
              management in a single solution. <br />
              Meet the right platform to help realize.
            </Card.Body>
            <Button className="Herobutton">Shoot a Direct Mail</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
