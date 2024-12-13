import React, { useEffect, useRef, useContext } from "react";
import { WebSocketContext } from "../context/WebSocketProvider";

const Canvas = () => {
  const canvasRef = useRef(null);
  const { yaw, pitch, roll, weight } = useContext(WebSocketContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Set canvas background color
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    const gridSize = 20;
    context.strokeStyle = "lightgrey";
    context.lineWidth = 0.5;

    for (let x = 0; x <= canvas.width; x += gridSize) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.stroke();
    }

    for (let y = 0; y <= canvas.height; y += gridSize) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.stroke();
    }

    // Draw red dot in the middle
    context.fillStyle = "red";
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
    context.fill();
  }, []);

  return (
    <div className="canvasContainer dropshadow">
      <canvas ref={canvasRef} />
      <div className="sensor-data">
        <p>Yaw: {yaw}</p>
        <p>Pitch: {pitch}</p>
        <p>Roll: {roll}</p>
        <p>Weight: {weight}</p>
      </div>
    </div>
  );
};

export default Canvas;
