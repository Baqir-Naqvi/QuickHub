import "./FeatureCard.css";
import React,{useEffect} from "react";
import Card from "react-bootstrap/Card";
import { GiPlanetCore } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";
import AOS from 'aos';
import { Col } from "react-bootstrap";

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
    fill='#111238'
     />,
    2: <IoRocketOutline
     className="icon"
    size={50}
    color='#111238'
     />,
    3: <SiSololearn 
     className="icon"
    size={50}
    fill='#111238'
    />,
  };

  return (
    <Card  className='card'
    data-aos={index === 1 ? 'fade-right' : index === 2 ? 'fade-up' : 'fade-left'}
    >
      <Card.Body style={
        {display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
      }}>
        <div 
        className="icondiv  flex-column self-center "
        >{icons[index]}</div >
        <Col className="cardcol">
        <Card.Subtitle className="cardsubtitle">{title}</Card.Subtitle>
        </Col>  
      </Card.Body>
    </Card>
  );
}
