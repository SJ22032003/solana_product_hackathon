import React from "react";
import { Grid } from "@mui/material";
import TopNavbar from "../../layout/navbar/TopNavbar";
import Navbar from "../../common/LandingComp/Navbar";
import Home from "./Home";

function Landing() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default Landing;
