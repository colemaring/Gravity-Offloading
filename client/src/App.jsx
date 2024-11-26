import { useState } from "react";
import Loadcell from "./components/Loadcell";
import Canvas from "./components/Canvas";
import "./App.css";
import Controller from "./components/Controller";
import IMU from "./components/IMU";
import Command from "./components/Command";

function App() {
  return (
    <div className="flex-container">
      <Canvas />
      <Loadcell />
      <Controller />
      <IMU />
      <Command />
    </div>
  );
}

export default App;
