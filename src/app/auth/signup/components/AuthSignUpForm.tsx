"use client";

import Grid from "@mui/material/Grid";
import AuthTextField from "../../components/AuthTextField";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { AuthButton } from "../../components/AuthButton";
import { AuthTextLink } from "../../components/AuthTextLink";

interface ISignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function AuthSignUpForm() {
  const { register, handleSubmit, control } = useForm<ISignUpData>();

  const handleSubmitData = (data: ISignUpData) => {
    console.log("SIGNUP DATA:", data);
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
          id="firstName"
          type="text"
          label="First name"
          {...register("firstName")}
        />
        <AuthTextField
          control={control}
          sm={6}
          id="lastName"
          type="text"
          label="Last name"
          {...register("lastName")}
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
          id="confirmPassword"
          type="password"
          label="Confirm your password"
          {...register("confirmPassword")}
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
