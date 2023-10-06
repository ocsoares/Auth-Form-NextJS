"use client";

import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import AuthTextField from "../../components/AuthTextField";
import { AuthButton } from "../../components/AuthButton";
import { AuthTextLink } from "../../components/AuthTextLink";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ILoginData {
  email: string;
  password: string;
}

const zodLoginSchema = z.object({
  email: z
    .string({ required_error: "O email é obrigatório !" })
    .min(1)
    .email("Formato de email inválido !"),

  password: z.string({ required_error: "A senha é obrigatória !" }).min(1),
}) satisfies ZodType<ILoginData>;

type ZodLoginSchemaData = z.infer<typeof zodLoginSchema>;

export function AuthLoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ZodLoginSchemaData>({
    resolver: zodResolver(zodLoginSchema),
  });

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
