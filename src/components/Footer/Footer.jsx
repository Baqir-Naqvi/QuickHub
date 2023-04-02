import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import './footerStyle.css'
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import {MdFacebook} from 'react-icons/md';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';

import { Button, Form } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid className='footercontainer'>
        <Row className='footerContent m-auto'>
            <Col className='footer-col'
            lg={3} md={6} sm={12}>
                <Row className='row'>
                    <Col lg={2}>
                    <AiOutlineMenu 
                    size={30}
                    color='black'
                    />
                    </Col>
                    <Col lg={10}>
                    <h3 className='footerlogo'>QuickHub</h3>
                    </Col>
                    <p className="footertext">
                        Finance helps companies manage<br/> payments easily.
                    </p>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to='#'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <MdFacebook 
                            size={30}
                            color='#91F5AD'
                            />
                        </Link>
                        <Link className='social-icon-link twitter'
                        to='#'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <FaTwitter
                             size={30}
                            color='#91F5AD'
                            />
                        </Link>

                        <Link className='social-icon-link instagram'
                        to='#'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <FaInstagramSquare size={30}
                            color='#91F5AD'
                            />
                        </Link>
                    </div>
                </Row>
            
            </Col>
            <Col className='footer-col'
            lg={3} md={6} sm={12}>
            
                <h4>Company</h4>
                < div className='footer'>
                    <Link className='FooterItem' to="#">About us</Link>
                    <Link className='FooterItem'  to="#">Careers</Link>
                    <Link className='FooterItem' to="#">Blog</Link>
                    <Link className='FooterItem' to="#">Pricing</Link>
                </ div >
            </Col>
            <Col className='footer-col'
             lg={3} md={6} sm={12}>
                <h4>Resources</h4>
                <div className='footer'>
                    <Link className='FooterItem' to="#">Proposal Template</Link>
                    <Link className='FooterItem' to="#">Invoice Template</Link>
                    <Link className='FooterItem' to="#">Tutorial</Link>
                    <Link className='FooterItem' to="#">How to write a contract</Link>
                </div>
            </Col>
            <Col className='footer-col'
             lg={3} md={6} sm={12}>
                <h4>Join our news letter</h4>
                <Form.Group className='footer-col-4-content'>
                    <Form.Control type="email" placeholder="Enter email" 
                    name="email" className='emailbar'
                         />
                    <Button className='subscribe-btn'>Subscribe</Button>
                </Form.Group>
            </Col>
        </Row>
    </Container>
  )
}
