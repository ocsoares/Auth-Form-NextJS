import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { SignUpBox } from "./components/SignUpBox";
import { Lock } from "@mui/icons-material";
import { AuthTextField } from "../components/AuthTextField";
import { AuthAvatar } from "../components/AuthAvatar";
import { AuthButton } from "../components/AuthButton";
import { AuthTextLink } from "../components/AuthTextLink";

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
            <Grid container spacing={4}>
              <AuthTextField
                autoFocus={true}
                sm={6}
                id="first-name"
                name="first-name"
                type="text"
                label="First name"
              />
              <AuthTextField
                sm={6}
                id="last-name"
                name="last-name"
                type="text"
                label="Last name"
              />
              <AuthTextField
                id="email"
                name="email"
                type="email"
                label="Email"
              />
              <AuthTextField
                id="password"
                name="password"
                type="password"
                label="Password"
              />
              <AuthTextField
                id="confirm-password"
                name="confirm-password"
                type="password"
                label="Confirm your password"
              />
            </Grid>
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
