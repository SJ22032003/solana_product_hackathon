import React from "react";
import { Grid } from "@mui/material";
import SideNavbar from "./layout/navbar/SideNavbar";
import TopNavbar from "./layout/navbar/TopNavbar";

function HOC({ children }) {
  return (
    <Grid container>
      <Grid
        item
        md={2}
        sx={{
          backgroundColor: "#1d2631",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <SideNavbar />
      </Grid>
      <Grid item md={10} sm={12}>
        <Grid item container>
          <Grid item xs={12}>
            <TopNavbar />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: "calc(100vh - 64px)",
              backgroundColor: "#f3f3f5",
              padding: "10px",
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HOC;
