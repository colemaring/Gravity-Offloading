const WebSocket = require("ws");
const express = require("express");
const path = require("path");

// Create an Express app
const app = express();

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, "../client/dist")));

// Start HTTP server on port 3000
const server = app.listen(3000, () => {
  console.log("HTTP server running on http://localhost:3000");
});

// Create a WebSocket server on top of the HTTP server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // When a message is received from the C++ client
  ws.on("message", (message) => {
    console.log("Received data: " + message);

    // Send the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:3000");
