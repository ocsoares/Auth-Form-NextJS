import {
  Avatar,
  Box,
  Button,
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
          <Avatar sx={{ m: 1, bgcolor: "#8F3098" }}>
            <LockPerson color="secondary" />
          </Avatar>
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
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ mt: 1, ml: 2.6 }}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
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
