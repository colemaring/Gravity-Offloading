import React from "react";
import Canvas from "../components/Canvas";
import MyNavbar from "../components/MyNavbar";

const ModbusPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="centerContainer">
        <Canvas />
      </div>
    </div>
  );
};

export default ModbusPage;
