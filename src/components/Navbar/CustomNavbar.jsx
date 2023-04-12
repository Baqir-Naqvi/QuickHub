import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./NavStyle.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/quickhublogo.png";

export default function CustomNavbar() {
  const navigation = useNavigate();
  const navigateLogin = () => {
    navigation("/login/true");
  };
  const navigateSignup = () => {
    navigation("/login/register");
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="NavBar" variant="light">
      <Container fluid className="mx-3">
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" className="logoImage" />
          Quick
          <span className="logoText">Hub</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" 
        // className="justify-content-evenly"
        >
          <Nav 
          className="ml-auto"
          >
            <Link className="NavItems" to="/">
              Home
            </Link>
            <Link className="NavItems" to="/guides">
              Guides
            </Link>
            <Link className="NavItems" to="#pricing">
              Pricing
            </Link>
            <Link className="NavItems" to="#pricing">
              Faq's
            </Link>

            <Link className="NavItems" to="#pricing">
              Testimonials
            </Link>
          </Nav>
          <Nav
            className="justify-content-end w-100"
          > 

            <Button
              className="NavbarButton text-white"
              onClick={() => {
                console.log("clicked");
              }}
              variant="mx-2"
            >
              Signup
            </Button>
            <Button
              // set this button active
              className="NavbarButton text-white"
              onClick={() => {
                console.log("clicked");
              }}
              variant="mx-2"
              >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
