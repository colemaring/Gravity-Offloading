import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { WebSocketContext } from "../context/WebSocketProvider";
import useThresholdState from "../hooks/useThresholdState";

const IMU = () => {
  const {
    yaw: newYaw,
    pitch: newPitch,
    roll: newRoll,
  } = useContext(WebSocketContext);

  const [yaw, setYaw] = useThresholdState(0.0, 0.5);
  const [pitch, setPitch] = useThresholdState(0.0, 0.5);
  const [roll, setRoll] = useThresholdState(0.0, 0.5);

  useEffect(() => {
    setYaw(newYaw);
    setPitch(newPitch);
    setRoll(newRoll);
  }, [newYaw, newPitch, newRoll, setYaw, setPitch, setRoll]);

  return (
    <div className="IMUContainer">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Euler Angles</Card.Title>
          <Card.Text className="fixed-width">
            <strong>Pitch:</strong> {pitch}°
          </Card.Text>
          <Card.Text className="fixed-width">
            <strong>Yaw:</strong> {yaw}°
          </Card.Text>
          <Card.Text className="fixed-width">
            <strong>Roll:</strong> {roll}°
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IMU;
