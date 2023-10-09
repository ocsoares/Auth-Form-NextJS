"use client";

import { Box, Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import AuthTextField from "../../components/AuthTextField";
import { AuthButton } from "../../components/AuthButton";
import { AuthTextLink } from "../../components/AuthTextLink";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { AuthAlert } from "../../components/AuthAlert";

interface ILoginData {
  email: string;
  password: string;
}

const zodLoginSchema = z.object({
  email: z
    .string({ required_error: "O email é obrigatório !" })
    .min(1, "O email é obrigatório !")
    .email("Formato de email inválido !"),

  password: z
    .string({ required_error: "A senha é obrigatória !" })
    .min(1, "A senha é obrigatória !"),
}) satisfies ZodType<ILoginData>;

type ZodLoginSchemaData = z.infer<typeof zodLoginSchema>;

export function AuthLoginForm() {
  const [remember, setRemember] = useState(false);
  const [logged, setLogged] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ZodLoginSchemaData>({
    resolver: zodResolver(zodLoginSchema),
  });

  const handleSubmitData = (data: ILoginData) => {
    console.log("LOGIN DATA:", data);

    // Setar o "logged" de Acordo com a RESPOSTA de uma API se Logou
    // com Sucesso ou NÃO !!!
    setLogged(true);
    reset();

    console.log("LOGGED:", logged);
  };

  const handleCheckboxChange = () => {
    // Usar "!" em um Boolean INVERTE o Valor ATUAL do Boolean !!!!
    setRemember(!remember);
  };

  useEffect(() => {
    console.log("Estado do Remember:", remember);
  }, [remember]);

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
            onChange={handleCheckboxChange}
          />
        </Grid>
        {/* Colocar o "logged" depois em "disabled" quando REDIRECIONAR para uma
            Rota PROTEGIDA !!! */}
        <AuthButton disabled={false} text="Login" />
        <AuthTextLink
          text="Don't have an account? "
          link="signup"
          textLink="Sign up"
        />
      </Box>
      <Stack spacing={2} sx={{ position: "absolute", top: 70, right: 0 }}>
        <AuthAlert
          showAlert={logged}
          color="success"
          severity="success"
          title="Sucesso"
          message="Você logou com sucesso no sistema !"
        />

        <AuthAlert
          showAlert={logged}
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
