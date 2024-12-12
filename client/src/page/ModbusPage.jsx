import React from "react";
import Command from "../components/Command";
import MyNavbar from "../components/MyNavbar";

const ModbusPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="centerContainer">
        <Command />
      </div>
    </div>
  );
};

export default ModbusPage;
