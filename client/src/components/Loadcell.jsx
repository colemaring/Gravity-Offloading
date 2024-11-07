import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Loadcell = () => {
  const [weight, setWeight] = useState("Loading...");

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.1.123:8080");

    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      // Update weight when message is received
      setWeight(event.data);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Loadcell Reading</h2>
        </div>
        <div className="card-body">
          <div className="holder">
            <h1 className="display-4">{weight} kg</h1>
          </div>
        </div>
        <div className="card-footer text-muted">
          From Raspberry Pi 5, hx711 module
        </div>
      </div>
    </div>
  );
};

export default Loadcell;
