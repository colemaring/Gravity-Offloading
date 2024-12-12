import React from "react";
import Card from "react-bootstrap/Card";

const IMU = ({ pitch, yaw, roll }) => {
  return (
    <div className="IMUContainer">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">IMU</Card.Title>
          <Card.Text>
            <strong>Pitch:</strong> {pitch}°
          </Card.Text>
          <Card.Text>
            <strong>Yaw:</strong> {yaw}°
          </Card.Text>
          <Card.Text>
            <strong>Roll:</strong> {roll}°
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IMU;
