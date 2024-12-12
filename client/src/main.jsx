import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import RemotePage from "./page/RemotePage.jsx";
import ModbusPage from "./page/ModbusPage.jsx";
import GraphCanvasPage from "./page/GraphCanvasPage.jsx";
import ControllerPage from "./page/ControllerPage.jsx";
import DataPage from "./page/DataPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/remote" element={<RemotePage />} />
        <Route path="/modbus" element={<ModbusPage />} />
        <Route path="/graph" element={<GraphCanvasPage />} />
        <Route path="/controller" element={<ControllerPage />} />
        <Route path="/data" element={<DataPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
