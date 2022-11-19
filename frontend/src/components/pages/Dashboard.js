import React from "react";
import { Grid, Typography, Box, Button, Paper, TextField } from "@mui/material";


function Dashboard() {

    const [solanaAddress, setSolanaAddress] = React.useState("");

    const handleSolanaAddressChange = (event) => {
        
    }

  return (
    <>
      <Box minHeight="calc(100vh - 64px)">
        <Grid container>
          <Grid item xs={12}>
            <Box p={2}>
              <Typography variant="h4">Dashboard</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Box px={2} pt={2}>
                <Typography variant="h6">Welcome to the Dashboard</Typography>
                <Typography variant="body1">
                  Enter your Solana Address to get started
                </Typography>
              </Box>
              <Box p={3}>
                <TextField
                    fullWidth
                    label="Solana Address"
                    variant="outlined"
                    margin="normal"
                    value={solanaAddress}
                    onChange={(e) => setSolanaAddress(e.target.value)}
                />
                <Button onClick={handleSolanaAddressChange} variant="contained" sx={{backgroundColor:'#5245dc',textTransform:'none'}}>Connect Wallet</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
