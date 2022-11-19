import React from "react";
import MyRoutes from "./routes/routes";
import HOC from "./components/HOC";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import LandingRoute from "./routes/LandingRoute";

function App() {
  const login = false;

  return (
    <>
      <ReactNotifications />
      <LandingRoute />
      {login && (
        <HOC>
          <MyRoutes />
        </HOC>
      )}
    </>
  );
}

export default App;
