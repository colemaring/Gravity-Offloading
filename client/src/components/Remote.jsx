import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Remote() {
  return (
    <Card className="remoteContainer dropshadow">
      <Card.Body>
        <Card.Title className="text-center">Remote</Card.Title>
        <Card.Body className="remoteText">
          Highlights pink when needed to be pressed
        </Card.Body>
        <div className="remoteSpeedContainer">
          <div className="white-circle"></div>
        </div>
        <div className="remoteButtonContainer">
          <Row>
            <Col>
              <Button variant="dark" size="lg" className="mb-4">
                <i className="fa-solid fa-arrow-up"></i>
              </Button>
            </Col>
            <Col>
              <Button variant="dark" size="lg" className="mb-4">
                <i className="fa-solid fa-arrow-down"></i>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="dark" size="lg" className="mb-4">
                <i className="fa-solid fa-arrow-up"></i>
              </Button>
            </Col>
            <Col>
              <Button variant="dark" size="lg" className="mb-3">
                <i className="fa-solid fa-arrow-down"></i>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="dark"
                size="lg"
                className="leftandrightButtonsRemote mb-2"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                size="lg"
                className="leftandrightButtonsRemote mb-2"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </Button>
            </Col>
          </Row>

          <div className="remoteWhiteBox"></div>
          <div className="greenButtonContainer">
            <div className="green-circle"></div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Remote;
