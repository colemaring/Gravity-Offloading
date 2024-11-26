import React, { useEffect, useRef } from "react";
import "../App.css";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Set canvas background color
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw red dot in the middle
    context.fillStyle = "red";
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
    context.fill();

    // Add text to the canvas
    context.fillStyle = "black";
    context.font = "2rem Arial";
    context.textAlign = "center";
    context.fillText("Crane Position", canvas.width / 2, 40);
  }, []);

  return (
    <div className="canvasContainer">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
