import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function AlertComponent({
  message = "Example message",
  severity = "info",
  display = "none",
}) {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          marginTop: "70px",
          display: { display },
          position: "absolute",
        }}
        spacing={2}
      >
        <Alert variant="filled" severity={severity}>
          {message}.
        </Alert>
      </Stack>
    </>
  );
}
