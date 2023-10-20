"use client";

import { AppButton } from "@/shared/components/AppButton";
import AppTextField from "@/shared/components/AppTextField";
import { Box, Grid, Stack } from "@mui/material";
import { useSendEmail } from "../hooks/useSendEmail";
import AppTextArea from "@/shared/components/AppTextArea";
import { AppAlert } from "@/shared/components/AppAlert";
import { useEffect } from "react";

export function SendEmailForm() {
  const {
    control,
    errors,
    isSubmitting,
    handleSubmit,
    register,
    handleSubmitData,
    apiFailed,
    apiFailedMessage,
    emailSent,
    emailSentTo,
    alertOpen,
    handleOnClose,
  } = useSendEmail();

  // Close alert after 6 seconds
  useEffect(() => {
    if (emailSent && alertOpen) {
      setTimeout(() => {
        handleOnClose();
      }, 6000);
    }
  }, [alertOpen, emailSent, handleOnClose]);

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

        <AppButton disabled={isSubmitting} text="Enviar email" />
      </Box>
      <Stack spacing={2} sx={{ position: "absolute", top: 70, right: 0 }}>
        {apiFailed && (
          <AppAlert
            showAlert={!emailSent && apiFailed}
            severity="error"
            title="Erro"
            message={apiFailedMessage}
          />
        )}

        <AppAlert
          showAlert={emailSent && alertOpen}
          color="success"
          severity="success"
          title="Sucesso"
          message="Você enviou o email com sucesso para o endereço "
          messageHTML={<strong>{emailSentTo}</strong>}
          onClose={handleOnClose}
        />
      </Stack>
    </>
  );
}
