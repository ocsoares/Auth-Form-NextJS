"use client";

import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import AuthTextField from "../../components/AuthTextField";
import { AuthButton } from "../../components/AuthButton";
import { AuthTextLink } from "../../components/AuthTextLink";
import { useForm } from "react-hook-form";

interface ILoginData {
  email: string;
  password: string;
}

export function AuthLoginForm() {
  const { register, handleSubmit, control } = useForm<ILoginData>();

  const handleSubmitData = (data: ILoginData) => {
    console.log("LOGIN DATA:", data);
  };

  return (
    <div>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
            sx={{ mt: 1, ml: 2.6 }}
          />
        </Grid>
        <AuthButton text="Login" />
        <AuthTextLink
          text="Don't have an account? "
          link="signup"
          textLink="Sign up"
        />
      </Box>
    </div>
  );
}
