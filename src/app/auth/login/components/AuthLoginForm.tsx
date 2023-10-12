"use client";

import { Box, Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import AuthTextField from "../../components/AuthTextField";
import { AuthButton } from "../../components/AuthButton";
import { AuthTextLink } from "../../components/AuthTextLink";
import { AuthAlert } from "../../components/AuthAlert";
import { useAuthLogin } from "../hooks/useAuthLogin";

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
          <AuthTextField
            control={control}
            autoFocus={true}
            error={errors.email || invalidCredentials ? true : false}
            helperText={errors.email?.message || invalidCredentialsMessage}
            id="email"
            type="email"
            label="Email"
            {...register("email")}
          />
          <AuthTextField
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
        <AuthButton disabled={logged} text="Login" />
        <AuthTextLink
          text="Don't have an account? "
          link="signup"
          textLink="Sign up"
        />
      </Box>
      <Stack spacing={2} sx={{ position: "absolute", top: 70, right: 0 }}>
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
          message="Você será redirecionado para a"
          messageHTML={<strong> home</strong>}
        />
      </Stack>
    </>
  );
}
