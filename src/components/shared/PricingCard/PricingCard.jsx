import "./PricingCardStyle.css";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
const PricingCard = ({ bg = "white" }) => {
  return (
    <div>
      <Card bg={bg}></Card>
    </div>
  );
};

export default PricingCard;
