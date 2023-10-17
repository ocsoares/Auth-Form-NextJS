"use client";

import { AuthButton } from "@/app/auth/components/AuthButton";
import AppTextField from "@/shared/components/AppTextField";
import { Box, Grid } from "@mui/material";
import { useSendEmail } from "../hooks/useSendEmail";
import AppTextArea from "@/shared/components/AppTextArea";

export function SendEmailForm() {
  const { control, errors, handleSubmit, register, handleSubmitData } =
    useSendEmail();

  // ARRUMAR o Submit, NÃO tá acionando !!!

  return (
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
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          id="destinationEmail"
          type="email"
          label="Email de destino"
          {...register("email")}
        />

        <AppTextArea
          control={control}
          rows={2}
          error={errors.subjectEmail ? true : false}
          helperText={errors.subjectEmail?.message}
          id="subjectEmail"
          label="Assunto do email"
          {...register("subjectEmail")}
        />

        <AppTextArea
          control={control}
          rows={6}
          error={errors.subjectEmail ? true : false}
          helperText={errors.subjectEmail?.message}
          id="textEmail"
          label="Texto do email"
          {...register("textEmail")}
        />
      </Grid>

      {/* ARRUMAR O BOTÃO !!! */}
      {/* Mudar esse "AuthButton" !!! */}

      {/* Fazer certo no lugar do "false" !! */}
      <AuthButton disabled={false} text="Enviar email" />
    </Box>
  );
}
