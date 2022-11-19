import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import landingImg from "../../assets/landingPage.png";

function Home() {
  return (
    <>
      <Grid
        container
        sx={{
          minHeight: "calc(100vh - 64px)",
          background: "linear-gradient(120deg,#000,#262743)"
        }}
        display="flex"
        flexDirection="row"
      >
        <Grid
          item
          xs={5}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection="column"
        >
          <Box color="#fff" pl={2}>
            <Typography
              textAlign="left"
              variant="h1"
              sx={{ fontSize: "80px", fontWeight: "800" }}
            >
              TracSolana
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "30px",color:'grey' }}>
              The easiest way to get started with Solana,
              <br /> with your account info and ligthning
              <br />fast speed
            </Typography>
          </Box>
          <Button>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                backgroundColor: "#14f195",
                padding: "15px 25px",
                borderRadius: "30px",
                color: "#000",
              }}
            >
              Get Started
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={7} display='flex' justifyContent='center'>
          <img
            src={landingImg}
            alt="landingImg"
            style={{ width: "60%", height: "90%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
