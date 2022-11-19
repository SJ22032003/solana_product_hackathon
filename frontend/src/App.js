import React from "react";
import MyRoutes from "./routes/routes";
import HOC from "./components/HOC";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import LandingRoute from "./routes/LandingRoute";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <ReactNotifications />
      <LandingRoute />

      <HOC>
        <MyRoutes />
      </HOC>
    </>
  );
}

export default App;
