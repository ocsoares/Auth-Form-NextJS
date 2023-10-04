import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { SignUpBox } from "./components/SignUpBox";
import { Lock } from "@mui/icons-material";
import { SignUpTextField } from "./components/SignUpTextField";

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
          <Avatar sx={{ m: 1, bgcolor: "#8F3098" }}>
            <Lock color="secondary" />
          </Avatar>
          <Typography variant="h5">Sign up</Typography>
          <SignUpBox>
            <Grid container spacing={5}>
              <SignUpTextField
                autoFocus={true}
                sm={6}
                id="first-name"
                name="first-name"
                type="text"
                label="First name"
              />
              <SignUpTextField
                sm={6}
                id="last-name"
                name="last-name"
                type="text"
                label="Last name"
              />
              <SignUpTextField
                id="email"
                name="email"
                type="email"
                label="Email"
              />
              <SignUpTextField
                id="password"
                name="password"
                type="password"
                label="Password"
              />
              <SignUpTextField
                id="confirm-password"
                name="confirm-password"
                type="password"
                label="Confirm your password"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body2" color={"whitesmoke"}>
                  Already have an account?{" "}
                  <Link
                    href="login"
                    variant="body2"
                    underline="hover"
                    color={"slateblue"}
                  >
                    Log in
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </SignUpBox>
        </Box>
      </Paper>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright © {new Date().getFullYear()} Cauã Soares.
      </Typography>
    </Container>
  );
}
