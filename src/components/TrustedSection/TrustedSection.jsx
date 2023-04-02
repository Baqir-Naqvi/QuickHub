import "./TrustedSectionStyle.css";
import { Container } from "react-bootstrap";
import iceimg from "../../assets/ice-img.png";
import deloit from "../../assets/deloitte-img.png";

const TrustedSection = () => {
  return (
    <div>
      <Container fluid className="trusted-container">
        <h4 className="trusted-title ">
          Trusted by ~7,700 enterprise customers
        </h4>
        <div className="trusted-img-container ">
          <img src={iceimg} width="20%" height="20%" />
          <img src={deloit} width="20%" height="20%" />
          <img src={iceimg} width="20%" height="20%" />
          <img src={deloit} width="20%" height="20%" />
          <img src={iceimg} width="20%" height="20%" />

        </div>
      </Container>
    </div>
  );
};

export default TrustedSection;
