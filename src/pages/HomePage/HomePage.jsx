import React from "react";
import Container from "react-bootstrap/Container";
import "./HomeStyle.css";
import { useEffect } from "react";
import { useGlobalContext } from "../../utils/ContextProvider";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./HomeStyle.css";
import { Button } from "react-bootstrap";
import PlatformSection from "../../components/PlatformSection/PlatformSection";
import TabsSection from "../../components/TabsSection/TabsSection";
import PersonalizeSection from "../../components/PersonalizeSection/PersonalizeSection";
import TrustedSection from "../../components/TrustedSection/TrustedSection";
import DigitalSection from "../../components/DigitalSection/DigitalSection";
import FAQs from "../../components/FAQs/FAQs";
import PricingSection from "../../components/PricingSection/PricingSection";

export default function HomePage() {
  const { setState } = useGlobalContext();
  useEffect(() => {
    setState(true);
  }, []);
  return (
    <Container fluid className="m-0 p-0">
      <HeroSection />
      <TabsSection />
      <DigitalSection />
      <FAQs />
      <TrustedSection />
      <PricingSection />
      <PlatformSection />

      <Container fluid className="innercontainer justify-center">
        <div className="flex-column align-items-center">
          <p className="trialtitle">
            Try QuickHub free <br />
            for 30 days
          </p>
          <Button className="trialbutton">Start free trial</Button>
        </div>
      </Container>
    </Container>
  );
}
