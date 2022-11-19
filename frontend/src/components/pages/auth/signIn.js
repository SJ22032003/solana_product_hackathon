import React from "react";
import { Grid, Typography, Button, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import * as actionType from "../../../redux/ActionType";
import {useNavigate} from 'react-router-dom';

function SignIn({ login = false }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [authData, setAuthData] = React.useState({
    username: "",
    password: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(authData);
    if (!authData.username || !authData.password) {
      alert("empty fields");
      return;
    } else {
      //saga signup
      dispatch({
        type: actionType.SIGNUP_USER,
        payload: {
          username: authData.username,
          password: authData.password,
        },
        history: history,
      });
    }
  };

  return (
    <>
      <Box
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ background: "linear-gradient(120deg,#000,#262743)" }}
      >
        <Box
          p={5}
          sx={{
            height: "fit-content",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h2" textAlign="center">
            {login ? "Login" : "Signup"}
          </Typography>
          <form style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(authData).map(([key, value]) => {
              return (
                <TextField
                  required
                  key={key}
                  label={key}
                  variant="outlined"
                  value={value}
                  onChange={(e) =>
                    setAuthData({ ...authData, [key]: e.target.value })
                  }
                  sx={{ margin: "10px 0" }}
                />
              );
            })}
            <Button
              onClick={handleSumbit}
              sx={{
                backgroundColor: "#14f195",
                color: "#000",
                fontWeight: "500",
              }}
            >
              {login ? "Login" : "Signup"}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default SignIn;
