import { Box, Container, Paper, Typography } from "@mui/material";
import { LockPerson } from "@mui/icons-material";
import { AuthLoginForm } from "./components/AuthLoginForm";
import { AuthAvatar } from "../components/AuthAvatar";

export default function LoginForm() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 5,
          marginBottom: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AuthAvatar avatar={<LockPerson color="secondary" />} />
          <Typography variant="h5">Login</Typography>
          <AuthLoginForm />
        </Box>
      </Paper>
    </Container>
  );
}
