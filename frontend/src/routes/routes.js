import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NoPage from "../components/common/NoPage";
import Dashboard from "../components/pages/Dashboard"

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NoPage notFound={true} />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
