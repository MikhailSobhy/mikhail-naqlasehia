import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function Loading() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <CircularProgress size={80} thickness={2} />
      </Box>
    </>
  );
}
