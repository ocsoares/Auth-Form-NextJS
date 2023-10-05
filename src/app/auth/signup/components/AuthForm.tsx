"use client";

import Grid from "@mui/material/Grid";
import AuthTextField from "../../components/AuthTextField";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { AuthButton } from "../../components/AuthButton";
import { AuthTextLink } from "../../components/AuthTextLink";

export function AuthForm() {
  const { register, handleSubmit, control } = useForm();

  const handleSubmitData = (data: any) => {
    console.log("DATA:", data);
  };

  return (
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
          sm={6}
          id="first-name"
          type="text"
          label="First name"
          {...register("first-name")}
        />
        <AuthTextField
          control={control}
          sm={6}
          id="last-name"
          type="text"
          label="Last name"
          {...register("last-name")}
        />
        <AuthTextField
          control={control}
          id="email"
          type="email"
          label="Email"
          {...register("email")}
        />
        <AuthTextField
          control={control}
          id="password"
          type="password"
          label="Password"
          {...register("password")}
        />
        <AuthTextField
          control={control}
          id="confirm-password"
          type="password"
          label="Confirm your password"
          {...register("confirm-password")}
        />
      </Grid>
      <AuthButton text="Sign Up" />
      <AuthTextLink
        text="Already have an account? "
        link="login"
        textLink="Log in"
      />
    </Box>
  );
}
