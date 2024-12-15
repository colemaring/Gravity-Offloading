import React from "react";
import Card from "react-bootstrap/Card";

const Accelerometer = ({ X, Y, Z }) => {
  return (
    <div className="IMUContainer">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Accelerometer</Card.Title>
          <Card.Text>
            <strong>X:</strong> {X}G
          </Card.Text>
          <Card.Text>
            <strong>Y:</strong> {Y}G
          </Card.Text>
          <Card.Text>
            <strong>X:</strong> {Z}G
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Accelerometer;
