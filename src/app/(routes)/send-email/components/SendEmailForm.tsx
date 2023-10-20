"use client";

import { AppButton } from "@/shared/components/AppButton";
import AppTextField from "@/shared/components/AppTextField";
import { Box, Grid } from "@mui/material";
import { useSendEmail } from "../hooks/useSendEmail";
import AppTextArea from "@/shared/components/AppTextArea";

export function SendEmailForm() {
  const { control, errors, handleSubmit, register, handleSubmitData } =
    useSendEmail();

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
          error={errors.textEmail ? true : false}
          helperText={errors.textEmail?.message}
          id="textEmail"
          label="Texto do email"
          {...register("textEmail")}
        />
      </Grid>

      <AppButton text="Enviar email" />
    </Box>
  );
}
