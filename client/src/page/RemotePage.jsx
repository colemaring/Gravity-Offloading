import React from "react";
import MyNavbar from "../components/MyNavbar";
import Remote from "../components/Remote";

const RemotePage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="centerContainer">
        <Remote />
      </div>
    </div>
  );
};

export default RemotePage;
