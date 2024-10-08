// NavBar.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImage from '../images/Logo.png';
import { Link } from 'react-router-dom';
import SurveyModal from '../components/SurveyModual';

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/"> 
            <img
              alt=""
              src={LogoImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Bloo Error 404
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/art">Art</Nav.Link>
              <Nav.Link as={Link} to="/software">Software</Nav.Link>
              <Nav.Link as={Link} to="/amissara">Amissara</Nav.Link>
              <NavDropdown title="Other Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.instagram.com/blooerror404/">See My Full Gallery</NavDropdown.Item>
                <NavDropdown.Item href="https://www.fiverr.com/blooperstillfir">
                  See My Commissions
                </NavDropdown.Item>
                <NavDropdown.Item href="patreon.com/BlooError404">Support me on Patreon</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleShow}>
                  Take my Survey
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SurveyModal show={showModal} handleClose={handleClose} />
    </>
  );
}


