import { Button, Switch } from "antd";
import "./PricingSectionStyle.css";
import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Button as BaseButton,
} from "react-bootstrap";

const PricingSection = () => {
  return (
    <div>
      <Container fluid className="pricing-container">
        <div>
          <h4 className="pricing text-center"> PRICING</h4>
          <h1
            className="text-white text-center"
            style={{ fontWeight: 800, marginTop: 20 }}
          >
            Pay, your way.
          </h1>
          <p
            className="text-center"
            style={{
              color: "rgba(111, 108, 144, 1)",
              fontWeight: 700,
              fontSize: 18,
              marginTop: 10,
            }}
          >
            Subscribe, ads enabled or based or pay as you go. Usage plans or all
            types of professionals, students or writers.
          </p>
          <div className="d-flex text-center justify-center text-white">
            <p>Subscribe</p>
            <Switch
              style={{
                backgroundColor: "rgba(128, 237, 153, 1)",
                marginInline: 10,
              }}
              checkedChildren="     "
            />
            <p>Pay as you go</p>
          </div>
        </div>
        <Row className="card-container">
          <Col className="col-style" xs={12} md={4}>
            <Card bg="white" className="white-card">
              <div>
                <div className="d-flex">
                  <img src="/src/assets/students-logo.png" alt="" />
                  <div>
                    <p className="for-text">For Students</p>
                    <p className="type-title">Student</p>
                  </div>
                </div>
                <div>
                  <p className="details-text">
                    Save hours and get better essays, assignments and tasks
                    without plagiarism.
                  </p>
                </div>
                <div className="d-flex">
                  <h1 className="price-text">$9.99</h1>
                  <p className="period-text">/monthly</p>
                </div>
                <div>
                  <h5 className="included-text">What's included</h5>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p className="check-text mb-0 ">50 outputs</p>
                </div>
                <div className="d-flex align-middle" style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p className="check-text mb-0 ">Adjust the audience</p>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p className="check-text mb-0 ">0% plagarism</p>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p className="check-text mb-0 ">Instant output</p>
                </div>
                <Button type="link" className="green-button text-black">
                  Get Started
                </Button>
              </div>
            </Card>
          </Col>
          <Col className="col-style" xs={12} md={4}>
            <Card
              style={{
                backgroundColor: "rgba(114, 182, 90, 1)",
              }}
              className="white-card upper-card"
            >
              <div>
                <div className="d-flex">
                  <img src="/src/assets/prof-logo.png" alt="" />
                  <div>
                    <p
                      className="for-text"
                      style={{ color: "rgba(0, 0, 0, 1)" }}
                    >
                      For professionals
                    </p>
                    <p
                      className="type-title"
                      style={{ color: "rgba(0, 0, 0, 1)" }}
                    >
                      Business{" "}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="details-text">
                    Save hours on emails, proposals and pitches, whilst making
                    the best impression.
                  </p>
                </div>
                <div className="d-flex">
                  <h1
                    className="price-text"
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                  >
                    $15.99
                  </h1>
                  <p className="period-text">/monthly</p>
                </div>
                <div>
                  <h5
                    className="included-text"
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                  >
                    What's included
                  </h5>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p
                    className="check-text mb-0 "
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                  >
                    100 outputs
                  </p>
                </div>
                <div className="d-flex align-middle" style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p
                    className="check-text mb-0 "
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                  >
                    Up to 1,000,000 tracked visits
                  </p>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p
                    className="check-text mb-0 "
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                  >
                    Premium support
                  </p>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p
                    className="check-text mb-0 "
                    style={{ color: "rgba(0, 0, 0, 1)" }}
                  >
                    Up to 10 team members
                  </p>
                </div>
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "rgba(128, 237, 153, 1)",
                  }}
                  className="green-button"
                  type="link"
                >
                  Get Started
                </Button>
              </div>
            </Card>
            <div className="d-flex align-middle justify-center">
              <BaseButton className="best-value">Best value</BaseButton>
            </div>
          </Col>
          <Col className="col-style" xs={12} md={4}>
            <Card bg="white" className="white-card">
              <div>
                <div className="d-flex">
                  <img src="/src/assets/writter-logo.png" alt="" />
                  <div>
                    <p className="for-text">For frequent writers</p>
                    <p className="type-title">Writter</p>
                  </div>
                </div>
                <div>
                  <p className="details-text">
                    Save hours on articles, reports and blog posts while
                    captivating your audience.
                  </p>
                </div>
                <div className="d-flex">
                  <h1 className="price-text">$29.00</h1>
                  <p className="period-text">/monthly</p>
                </div>
                <div>
                  <h5 className="included-text">What's included</h5>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p className="check-text mb-0 ">200 outputs </p>
                </div>
                <div className="d-flex align-middle" style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p className="check-text mb-0 ">Original content</p>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p className="check-text mb-0 ">Adjust your tone</p>
                </div>
                <div className="d-flex align-middle " style={{ marginTop: 14 }}>
                  <img src="/src/assets/check-green.png" alt="" />
                  <p className="check-text mb-0 ">Up to 50 team members</p>
                </div>
                <Button type="link" className="green-button text-black">
                  Get Started
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingSection;
