import { Typography } from "@mui/material";

export function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginBottom: "20px",
      }}
    >
      Copyright © {new Date().getFullYear()} Cauã Soares.
    </Typography>
  );
}
