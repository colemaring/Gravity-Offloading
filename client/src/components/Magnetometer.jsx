import React from "react";
import Card from "react-bootstrap/Card";

const Magnetometer = ({ X, Y, Z }) => {
  return (
    <div className="IMUContainer">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Magnetometer</Card.Title>
          <Card.Text>
            <strong>X:</strong> {X}nT
          </Card.Text>
          <Card.Text>
            <strong>Y:</strong> {Y}nT
          </Card.Text>
          <Card.Text>
            <strong>Z:</strong> {Z}nT
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Magnetometer;
