import React from "react";
import IMU from "../components/IMU";
import MyNavbar from "../components/MyNavbar";
import Loadcell from "../components/Loadcell";

const ModbusPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="infoContainer">
        <div className="centerContainer">
          <IMU />
          <Loadcell />
        </div>
      </div>
    </div>
  );
};

export default ModbusPage;
