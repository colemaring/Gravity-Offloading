import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AutoSettings() {
  const [speed, setSpeed] = useState(50);
  const [sensitivity, setSensitivity] = useState(50);
  const [smoothing, setSmoothing] = useState(50);
  const [threshold, setThreshold] = useState(50);

  const resetDefaults = () => {
    setSpeed(50);
    setSensitivity(50);
    setSmoothing(50);
    setThreshold(50);
  };

  return (
    <Card className="settingsContainer">
      <Card.Body>
        <Card.Title>Automatic System Settings</Card.Title>
        <Form>
          <Form.Group controlId="formSpeed">
            <Form.Label>Speed: {speed}</Form.Label>
            <Form.Range
              min="0"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formSensitivity">
            <Form.Label>Sensitivity: {sensitivity}</Form.Label>
            <Form.Range
              min="0"
              max="100"
              value={sensitivity}
              onChange={(e) => setSensitivity(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formSmoothing">
            <Form.Label>Smoothing: {smoothing}</Form.Label>
            <Form.Range
              min="0"
              max="100"
              value={smoothing}
              onChange={(e) => setSmoothing(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formThreshold">
            <Form.Label>Threshold: {threshold}</Form.Label>
            <Form.Range
              min="0"
              max="100"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" style={{ marginRight: "10px" }}>
            Save Settings
          </Button>
          <Button variant="secondary" onClick={resetDefaults}>
            Reset to Default
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AutoSettings;
