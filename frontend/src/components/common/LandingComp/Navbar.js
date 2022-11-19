import React from "react";
import { Typography, AppBar, Toolbar, Stack } from "@mui/material";
import MuiButton from "../MuiButton";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ background: "linear-gradient(120deg,#000,#262743)" }}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "flex-end" }}
        disableGutters={true}
      >
        <Stack direction="row">
          <Typography variant="h6" component="div">
            <Link to="/login">
              <MuiButton
                variant="outline"
                btnName="Login"
                customStyle={{
                  marginRight: "20px",
                  padding: "8px 20px",
                  backgroundColor: "transparent",
                }}
              />
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/signup">
              <MuiButton
                variant="outline"
                btnName="Signup"
                customStyle={{
                  marginRight: "20px",
                  padding: "8px 20px",
                  backgroundColor: "transparent",
                }}
              />
            </Link>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
