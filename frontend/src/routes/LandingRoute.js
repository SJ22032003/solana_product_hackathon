import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../components/pages/landingPage/Landing";

function LandingRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default LandingRoute;
