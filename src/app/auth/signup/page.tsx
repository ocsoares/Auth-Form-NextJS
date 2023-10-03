import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { SignUpBox } from "./components/SignUpBox";
import { Lock } from "@mui/icons-material";

export default function SignUpForm() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
              <Grid item xs={12} sm={6}>
                <TextField
                  color="secondary"
                  autoComplete="none"
                  name="first-name"
                  required
                  fullWidth
                  id="first-name"
                  label="First name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  color="secondary"
                  required
                  fullWidth
                  id="last-name"
                  label="Last name"
                  name="last-name"
                  autoComplete="none"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="none"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="none"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm your password"
                  type="password"
                  id="confirm-password"
                  autoComplete="none"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </SignUpBox>
        </Box>
      </Paper>
    </Container>
  );
}
