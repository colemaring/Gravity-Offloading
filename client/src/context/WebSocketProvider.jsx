import React, { createContext, useEffect, useState } from "react";

export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [yaw, setYaw] = useState(0.0);
  const [pitch, setPitch] = useState(0.0);
  const [roll, setRoll] = useState(0.0);
  const [weight, setWeight] = useState(0.0);

  useEffect(() => {
    // WebSocket connection
    const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      const [yaw, pitch, roll, weight] = event.data.split(",").map(parseFloat);
      setYaw(yaw);
      setPitch(pitch);
      setRoll(roll);
      setWeight(weight);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ yaw, pitch, roll, weight }}>
      {children}
    </WebSocketContext.Provider>
  );
};
