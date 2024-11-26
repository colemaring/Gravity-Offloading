import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Loadcell() {
  const [raw, useRaw] = useState("17.2kg");
  const [value, useValue] = useState("0.2kg");
  return (
    <Card className="loadcellContainer">
      <Card.Body>
        <Card.Title className="text-center">Loadcell</Card.Title>
        <Card.Text>Raw: {raw}</Card.Text>
        <Button>Zero</Button>
        <Card.Text>Zero'd Reading: {value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Loadcell;
