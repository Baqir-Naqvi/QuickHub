import "./FeatureCard.css";
import React,{useEffect} from "react";
import Card from "react-bootstrap/Card";
import { GiPlanetCore } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";
import AOS from 'aos';

export default function FeatureCard({ title, description, index }) {
   useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])
  let icons = {
    1: <GiPlanetCore
    className="icon"
    size={50}
    fill='#72B65A'
     />,
    2: <IoRocketOutline
     className="icon"
    size={50}
    color='#72B65A'
     />,
    3: <SiSololearn 
     className="icon"
    size={50}
    fill='#72B65A'
    />,
  };
  return (
    <Card style={{ width: "22rem" }} className='card'
    data-aos={index === 1 ? 'fade-right' : index === 2 ? 'fade-up' : 'fade-left'}
    >
      <Card.Body>
        <Card.Title>{icons[index]}</Card.Title>
        <Card.Subtitle className="cardsubtitle">{title}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
