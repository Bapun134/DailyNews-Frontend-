import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark mt-auto py-3">
        <Container>
          <Row>
            <Col className="text-center">
              
              <div className="social-icons">
                <a href="https://www.facebook.com" className="social-icon"><FaFacebook /></a>
                <a href="https://www.instagram.com" className="social-icon"><FaInstagram /></a>
                <a href="https://www.twitter.com" className="social-icon"><FaTwitter /></a>
                <a href="https://www.linkedin.com" className="social-icon"><FaLinkedin /></a>
              </div>

              <p className="mb-1"> 
                Copyright © 2024 Daily News, Tech Mahindra. All rights reserved.
              </p>

            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
