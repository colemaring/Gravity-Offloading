import React from "react";
import { Button, Container, Row, Col, Alert, Card } from "react-bootstrap";
import "../App.css";

const Controller = () => {
  return (
    <Card className="controllerContainer">
      <Card.Body>
        <Card.Title className="text-center">Manual Control</Card.Title>
        <Container className="text-center mt-3">
          <Row className="mb-2">
            <Col></Col> {/* Empty cell */}
            <Col>
              <Button>
                <i className="fa-solid fa-arrow-up"></i>
              </Button>
            </Col>
            <Col>
              <Button variant="success">
                <i className="fa-solid fa-arrow-up"></i>
              </Button>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Button>
                <i className="fa-solid fa-arrow-left"></i>
              </Button>
            </Col>
            <Col>
              <Button variant="danger">
                <i className="fa-solid fa-square"></i>
              </Button>
            </Col>
            <Col>
              <Button>
                <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col></Col> {/* Empty cell */}
            <Col>
              <Button>
                <i className="fa-solid fa-arrow-down"></i>
              </Button>
            </Col>
            <Col>
              <Button variant="success">
                <i className="fa-solid fa-arrow-down"></i>
              </Button>
            </Col>
          </Row>
        </Container>
        <Alert variant="info" className="mt-3  mb-1">
          <Card.Text className=" mb-1">Red: Stop All</Card.Text>
          <Card.Text className=" mb-1">Blue: Crane Control</Card.Text>
          <Card.Text className=" mb-1">Green: Hoist Control</Card.Text>
        </Alert>
      </Card.Body>
    </Card>
  );
};

export default Controller;
