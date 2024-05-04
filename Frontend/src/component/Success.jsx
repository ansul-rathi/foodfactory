import React from "react";
import { Card, Typography } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material"; // Importing MUI's check circle icon

function Success() {
  return (
    <Card
      sx={{
        display: "grid",
        placeItems: "center",
        margin: 0,
        minHeight: { xs: "50vh", md: "40vh" },
        minWidth: { xs: "80vw", md: "50vw" },
        borderWidth: 4,
        marginTop: 12,
        animation: "appear 1s ease-out forwards", // Animation for card appearance
        "@keyframes appear": {
          // Keyframes for card appearance
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "@keyframes tick": {
          // Keyframes for the tick animation
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "6rem",
          color: "green",
          animation: "tick 2s ease-out forwards", // Animation for the tick icon
        }}
      >
        <CheckCircleOutline sx={{ fontSize: "inherit", color: "green" }} />
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        !!! Thank You for Shopping !!!
      </Typography>
      <Typography variant="body1">Visit Again</Typography>
    </Card>
  );
}

export default Success;
