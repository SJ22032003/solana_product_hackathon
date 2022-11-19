import React from "react";
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  Stack,
  Box,
} from "@mui/material";
import TaxAddaLogo from "../../assets/TaxAdda.png";
import { SideNavbarList } from "../../data/StaticData";
import {NavLink} from "react-router-dom";

function SideNavbar() {
  return (
    <AppBar
      position="sticky"
      sx={{backgroundColor:"transparent", boxShadow:"none"}}
    >
      <Toolbar disableGutters={true}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Box sx={{ backgroundColor: "#101825" }}>
            <Typography
              variant="h5"
              type="div"
              sx={{
                padding: "5px",
                margin: "5px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={TaxAddaLogo}
                alt="logo"
                style={{ maxWidth: "180px", width: "100%" }}
              />
            </Typography>
          </Box>
          <Box>
            {SideNavbarList.map((item, index) => {
              return (
                <NavLink id="navbar-item" to={`/${item.link}`}>
                  <Button
                    variant="outline"
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      textTransform: "none",
                      color: "#98a2af",
                      padding: "10px 16px",
                      fontWeight: "600",
                      margin: "15px 0",
                      width: "100%",
                      textAlign: "left",
                      "&:hover": {
                        backgroundColor: "#2d3743",
                      },
                    }}
                  >
                    <img
                      src={item.image}
                      alt="img"
                      style={{ width: "25px", marginRight: "15px" }}
                    />{" "}
                    {item.name}
                  </Button>
                </NavLink>
              );
            })}
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default SideNavbar;
