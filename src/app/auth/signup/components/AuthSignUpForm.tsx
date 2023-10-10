"use client";

import Grid from "@mui/material/Grid";
import AuthTextField from "../../components/AuthTextField";
import { Box, Stack } from "@mui/material";
import { AuthButton } from "../../components/AuthButton";
import { AuthTextLink } from "../../components/AuthTextLink";
import { AuthAlert } from "../../components/AuthAlert";
import { useAuthSignUp } from "../hooks/useAuthSignUp";

export function AuthSignUpForm() {
  const {
    handleSubmit,
    handleSubmitData,
    control,
    errors,
    register,
    formSent,
    apiFailed,
    apiFailedMessage,
  } = useAuthSignUp();

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
            error={errors.firstName ? true : false}
            helperText={errors.firstName?.message}
            sm={6}
            id="firstName"
            type="text"
            label="First name"
            {...register("firstName")}
          />

          <AuthTextField
            control={control}
            error={errors.lastName ? true : false}
            helperText={errors.lastName?.message}
            sm={6}
            id="lastName"
            type="text"
            label="Last name"
            {...register("lastName")}
          />

          <AuthTextField
            control={control}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
            id="email"
            type="email"
            label="Email"
            {...register("email")}
          />

          <AuthTextField
            control={control}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            id="password"
            type="password"
            label="Password"
            {...register("password")}
          />

          <AuthTextField
            control={control}
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword?.message}
            id="confirmPassword"
            type="password"
            label="Confirm your password"
            {...register("confirmPassword")}
          />
        </Grid>
        <AuthButton disabled={formSent} text="Sign Up" />

        <AuthTextLink
          text="Already have an account? "
          link="login"
          textLink="Log in"
        />
      </Box>
      <Stack spacing={2} sx={{ position: "absolute", top: 70, right: 0 }}>
        <AuthAlert
          showAlert={!formSent && apiFailed}
          severity="error"
          title="Erro"
          message={apiFailedMessage}
        />

        <AuthAlert
          showAlert={formSent && !apiFailed}
          color="success"
          severity="success"
          title="Sucesso"
          message="Sua foi conta registrada com sucesso em nosso sistema !"
        />

        <AuthAlert
          showAlert={formSent && !apiFailed}
          timeout={3000}
          severity="info"
          title="Redirecionando"
          message="Você será redirecionado para efetuar o"
          messageHTML={<strong> login</strong>}
        />
      </Stack>
    </>
  );
}
