import { Box, Container, Paper, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { AuthAvatar } from "../components/AuthAvatar";
import { AuthSignUpForm } from "./components/AuthSignUpForm";

export default function SignUpForm() {
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
          <AuthAvatar avatar={<Lock color="secondary" />} />
          <Typography variant="h5">Sign up</Typography>
          <AuthSignUpForm />
        </Box>
      </Paper>
    </Container>
  );
}
