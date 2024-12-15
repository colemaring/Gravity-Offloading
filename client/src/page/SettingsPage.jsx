import React from "react";
import ManualSettings from "../components/ManualSettings";
import AutoSettings from "../components/AutoSettings";
import MyNavbar from "../components/MyNavbar";

const SettingsPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="centerContainer">
        <ManualSettings />
        <AutoSettings />
      </div>
    </div>
  );
};

export default SettingsPage;
