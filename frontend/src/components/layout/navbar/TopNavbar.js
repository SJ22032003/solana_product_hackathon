import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Stack,
  IconButton,
} from "@mui/material";
import smallTaxAdda from "../../assets/small-taxadda.png";
import MuiButton from "../../common/MuiButton";

function TopNavbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "flex-end" }}
        disableGutters={true}
      >
        <Stack direction="row" spacing={2}>
          <Typography variant="h6" component="div">
            <MuiButton
              variant="outline"
              btnName="Manage Subscription"
              customStyle={{
                marginRight: "20px",
                padding: "8px 12px",
              }}
            />
            <IconButton>
              <img src={smallTaxAdda} alt="logo" style={{ width: "38px" }} />
            </IconButton>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavbar;
