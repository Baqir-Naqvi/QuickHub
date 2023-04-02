import './QuickSection.css'
import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'
import FeatureCard from '../FeatureCard/FeatureCard'
import { Row } from 'react-bootstrap'
import {featuresData} from '../../data/FeaturesData'
import AOS from 'aos';

export default function QuickSection() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])

  return (
    <Container fluid 
    className="quicksection"

    >
    <h4
    className="quicktitle"
    >
        You Choose Your Commission Plan
    </h4>
    <Row
    className="quickrow"
    >
        {featuresData.map((feature, index) => {
            return (
                <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                index={feature.id}
              />
            )
        })}

    </Row>
    </Container>
  )
}
