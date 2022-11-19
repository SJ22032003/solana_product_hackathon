import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../components/pages/landingPage/Landing";
import SignIn from "../components/pages/auth/signIn";

function LandingRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SignIn login={true} />} />
        <Route path="/signup" element={<SignIn login={false} />} />
      </Routes>
    </>
  );
}

export default LandingRoute;
