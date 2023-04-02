import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomeStyle.css";
import { useEffect } from "react";
import { useGlobalContext } from "../../utils/ContextProvider";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import QuickSection from "../../components/QuickSection/QuickSection";
import FAQs from "../../components/FAQs/FAQs";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import "./HomeStyle.css";
import { Button } from "react-bootstrap";
import PlatformSection from "../../components/PlatformSection/PlatformSection";
import TabsSection from "../../components/TabsSection/TabsSection";
import PersonalizeSection from "../../components/PersonalizeSection/PersonalizeSection";
import TrustedSection from "../../components/TrustedSection/TrustedSection";
import DigitalSection from "../../components/DigitalSection/DigitalSection";
import FAQ from "../../components/FAQs/FAQ";


export default function HomePage() {
  const { setState } = useGlobalContext();
  useEffect(() => {
    setState(true);
  }, []);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <Container fluid className="m-0 p-0">
      <HeroSection />
      <PlatformSection />
      <QuickSection />
      <TabsSection />
      <PersonalizeSection />
      <TrustedSection />
      <DigitalSection />
      <FAQ />

      <Container fluid className="innercontainer justify-center">
       
          <div className="flex-column align-items-center">
            <p className="trialtitle">
              Try QuickHub free <br />
              for 30 days
            </p>
          <Button className="trialbutton">Start free trial</Button>
          </div>
      </Container>
      <Footer />
    </Container>
  );
}
