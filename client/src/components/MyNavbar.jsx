import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary no-margin-padding dropshadow"
    >
      <Container>
        <Navbar.Brand>Gravity Offloading</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Docs
            </Nav.Link>
            <Nav.Link as={Link} to="/remote">
              Remote
            </Nav.Link>
            <Nav.Link as={Link} to="/modbus">
              Packets
            </Nav.Link>
            <Nav.Link as={Link} to="/graph">
              Graph
            </Nav.Link>
            <Nav.Link as={Link} to="/data">
              Sensors
            </Nav.Link>
            <Nav.Link as={Link} to="/settings">
              Config
            </Nav.Link>
          </Nav>

          <div className="status-container">
            Status:&nbsp;
            <span className="status-dot"></span>
            <span className="status-text">Disconnected</span>
          </div>
        </Navbar.Collapse>
        <Button variant="danger" disabled className="emergencyStop">
          Stop
        </Button>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
