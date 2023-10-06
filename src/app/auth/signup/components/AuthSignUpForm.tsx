"use client";

import Grid from "@mui/material/Grid";
import AuthTextField from "../../components/AuthTextField";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { AuthButton } from "../../components/AuthButton";
import { AuthTextLink } from "../../components/AuthTextLink";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { capitalize } from "lodash";

interface ISignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const zodSignUpSchema = z
  .object({
    firstName: z
      .string({ required_error: "O primeiro nome é obrigatório !" })
      .min(4, "O primeiro nome deve ter no mínimo 4 caracteres !")
      .transform((firstName) => {
        firstName = firstName.trim();
        firstName = firstName.replaceAll(" ", "");
        firstName = capitalize(firstName);

        return firstName;
      }),

    lastName: z
      .string({ required_error: "O último nome é obrigatório !" })
      .min(4, "O último nome deve ter no mínimo 4 caracteres !")
      .transform((lastName) => {
        lastName = lastName.trim();
        lastName = lastName.replaceAll(" ", "");
        lastName = capitalize(lastName);

        return lastName;
      }),

    email: z
      .string({ required_error: "O email é obrigatório !" })
      .min(1)
      .email("Formato de email inválido !"),

    password: z
      .string({ required_error: "A senha é obrigatória !" })
      .min(7, "A senha precisa ter no mínimo 7 caracteres !"),

    confirmPassword: z
      .string({ required_error: "A confirmação de senha é obrigatória !" })
      .min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais !",
    path: ["confirmPassword"],
  }) satisfies ZodType<ISignUpData>;

type ZodSignUpSchemaData = z.infer<typeof zodSignUpSchema>;

export function AuthSignUpForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ZodSignUpSchemaData>({
    resolver: zodResolver(zodSignUpSchema),
  });

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
          {...register("email", { required: "" })}
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
      <AuthButton text="Sign Up" />
      <AuthTextLink
        text="Already have an account? "
        link="login"
        textLink="Log in"
      />
    </Box>
  );
}