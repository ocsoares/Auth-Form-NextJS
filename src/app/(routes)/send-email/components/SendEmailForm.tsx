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
          error={errors.email_to ? true : false}
          helperText={errors.email_to?.message}
          id="destinationEmail"
          type="email"
          label="Email de destino"
          {...register("email_to")}
        />

        <AppTextArea
          control={control}
          rows={2}
          error={errors.subject ? true : false}
          helperText={errors.subject?.message}
          id="subjectEmail"
          label="Assunto do email"
          {...register("subject")}
        />

        <AppTextArea
          control={control}
          rows={6}
          error={errors.text ? true : false}
          helperText={errors.text?.message}
          id="textEmail"
          label="Texto do email"
          {...register("text")}
        />
      </Grid>

      <AppButton text="Enviar email" />
    </Box>
  );
}
