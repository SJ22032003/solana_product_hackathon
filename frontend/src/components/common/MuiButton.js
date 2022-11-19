import React from "react";
import { Button } from "@mui/material";

function MuiButton(props) {
  const { btnName, onClick, image, customStyle, variant, disabled, type } =
    props;

  return (
    <>
      <Button
        type={type}
        disabled={disabled}
        onClick={onClick}
        variant={variant}
        sx={{
          padding: "0px 15px",
          margin: "0 5px",
          backgroundColor: "#5245dc",
          textTransform: "none",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "5px",
          "&:hover": { backgroundColor: "#322a93" },
          ...customStyle,
        }}
      >
        {image && (
          <img
            src={image}
            alt="tags"
            style={{ width: "20px", marginRight: "5px" }}
          />
        )}
        {btnName}
      </Button>
    </>
  );
}

export default MuiButton;