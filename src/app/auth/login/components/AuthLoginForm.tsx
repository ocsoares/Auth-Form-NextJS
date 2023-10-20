"use client";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
} from "@mui/material";
import AppTextField from "../../../../shared/components/AppTextField";
import { AppButton } from "../../../../shared/components/AppButton";
import { AuthTextLink } from "../../components/AuthTextLink";
import { AuthAlert } from "../../components/AuthAlert";
import { useAuthLogin } from "../hooks/useAuthLogin";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";

export function AuthLoginForm() {
  const {
    handleSubmit,
    handleSubmitData,
    control,
    errors,
    register,
    handleCheckboxChange,
    logged,
    invalidCredentials,
    invalidCredentialsMessage,
    apiFailed,
    apiFailedMessage,
    handleGoogleLoginButton,
  } = useAuthLogin();

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(handleSubmitData)}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={4}>
          <AppTextField
            control={control}
            autoFocus={true}
            error={errors.email || invalidCredentials ? true : false}
            helperText={errors.email?.message || invalidCredentialsMessage}
            id="email"
            type="email"
            label="Email"
            {...register("email")}
          />
          <AppTextField
            control={control}
            error={errors.password || invalidCredentials ? true : false}
            helperText={errors.password?.message || invalidCredentialsMessage}
            id="password"
            type="password"
            label="Password"
            {...register("password")}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
            sx={{ mt: 1, ml: 2.6 }}
            onChange={handleCheckboxChange}
          />
        </Grid>

        <Divider>OR</Divider>

        <Stack spacing={1.6} mt={1.5}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<FcGoogle />}
            onClick={handleGoogleLoginButton}
          >
            Google
          </Button>

          <Button variant="outlined" color="secondary" startIcon={<GrGithub />}>
            GitHub
          </Button>
        </Stack>

        <AppButton disabled={logged} text="Login" />
        <AuthTextLink
          text="Don't have an account? "
          link="signup"
          textLink="Sign up"
        />
      </Box>
      <Stack spacing={2} sx={{ position: "absolute", top: 70, right: 0 }}>
        {apiFailed && (
          <AuthAlert
            showAlert={!logged && apiFailed}
            severity="error"
            title="Erro"
            message={apiFailedMessage}
          />
        )}

        <AuthAlert
          showAlert={logged && !invalidCredentials}
          color="success"
          severity="success"
          title="Sucesso"
          message="Você logou com sucesso no sistema !"
        />

        <AuthAlert
          showAlert={logged && !invalidCredentials}
          timeout={3000}
          severity="info"
          title="Redirecionando"
          message="Você será redirecionado para"
          messageHTML={<strong> send email</strong>}
        />
      </Stack>
    </>
  );
}
