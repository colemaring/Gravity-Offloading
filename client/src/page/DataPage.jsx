import React from "react";
import IMU from "../components/IMU";
import MyNavbar from "../components/MyNavbar";
import Loadcell from "../components/Loadcell";
import Magnetometer from "../components/Magnetometer";
import Accelerometer from "../components/Accelerometer";

const ModbusPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="infoContainer">
        <div className="centerContainer">
          <Loadcell />
          <IMU />
          <Magnetometer />
          <Accelerometer />
        </div>
      </div>
    </div>
  );
};

export default ModbusPage;
