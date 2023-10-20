"use client";

import Grid from "@mui/material/Grid";
import AppTextField from "../../../../shared/components/AppTextField";
import { Box, Stack } from "@mui/material";
import { AppButton } from "../../../../shared/components/AppButton";
import { AuthTextLink } from "../../components/AuthTextLink";
import { useAuthSignUp } from "../hooks/useAuthSignUp";
import { AppAlert } from "@/shared/components/AppAlert";

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
    emailExists,
    emailExistsMessage,
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
          <AppTextField
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

          <AppTextField
            control={control}
            error={errors.lastName ? true : false}
            helperText={errors.lastName?.message}
            sm={6}
            id="lastName"
            type="text"
            label="Last name"
            {...register("lastName")}
          />

          <AppTextField
            control={control}
            error={errors.email || emailExists ? true : false}
            helperText={errors.email?.message || emailExistsMessage}
            id="email"
            type="email"
            label="Email"
            {...register("email")}
          />

          <AppTextField
            control={control}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            id="password"
            type="password"
            label="Password"
            {...register("password")}
          />

          <AppTextField
            control={control}
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword?.message}
            id="confirmPassword"
            type="password"
            label="Confirm your password"
            {...register("confirmPassword")}
          />
        </Grid>
        <AppButton disabled={formSent} text="Sign Up" />

        <AuthTextLink
          text="Already have an account? "
          link="login"
          textLink="Log in"
        />
      </Box>
      <Stack spacing={2} sx={{ position: "absolute", top: 70, right: 0 }}>
        {/* Dentro de uma Condicional para NÃO ocupar ESPAÇO desnecessário do "Stack" */}
        {apiFailed && (
          <AppAlert
            showAlert={!formSent && apiFailed}
            severity="error"
            title="Erro"
            message={apiFailedMessage}
          />
        )}

        <AppAlert
          showAlert={formSent && !apiFailed}
          color="success"
          severity="success"
          title="Sucesso"
          message="Sua foi conta registrada com sucesso em nosso sistema !"
        />

        <AppAlert
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
