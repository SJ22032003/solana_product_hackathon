import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NoPage from "../components/common/NoPage";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<NoPage notFound={true} />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
