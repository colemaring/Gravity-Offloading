import React from "react";
import Controller from "../components/Controller";
import MyNavbar from "../components/MyNavbar";

const ModbusPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="centerContainer">
        <Controller />
      </div>
    </div>
  );
};

export default ModbusPage;
