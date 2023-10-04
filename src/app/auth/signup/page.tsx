import { Box, Container, Paper, Typography } from "@mui/material";
import { SignUpBox } from "./components/SignUpBox";
import { Lock } from "@mui/icons-material";
import { AuthAvatar } from "../components/AuthAvatar";
import { AuthButton } from "../components/AuthButton";
import { AuthTextLink } from "../components/AuthTextLink";
import { AuthFormFields } from "./components/AuthFormFields";

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
          <SignUpBox>
            <AuthFormFields />
            <AuthButton text="Sign Up" />
            <AuthTextLink
              text="Already have an account? "
              link="login"
              textLink="Log in"
            />
          </SignUpBox>
        </Box>
      </Paper>
    </Container>
  );
}
