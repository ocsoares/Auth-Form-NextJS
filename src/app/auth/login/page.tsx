import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { LockPerson } from "@mui/icons-material";
import { LoginBox } from "./components/LoginBox";
import { AuthTextField } from "../components/AuthTextField";
import { AuthAvatar } from "../components/AuthAvatar";
import { AuthButton } from "../components/AuthButton";

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
          <LoginBox>
            <Grid container spacing={4}>
              <AuthTextField
                autoFocus={true}
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
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
                sx={{ mt: 1, ml: 2.6 }}
              />
            </Grid>
            <AuthButton text="Login" />
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body2" color={"whitesmoke"}>
                  {`Don't have an account?`}{" "}
                  <Link
                    href="signup"
                    variant="body2"
                    underline="hover"
                    color={"slateblue"}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </LoginBox>
        </Box>
      </Paper>
    </Container>
  );
}
