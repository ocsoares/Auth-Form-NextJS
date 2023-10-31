import { AppAvatar } from "@/shared/components/AppAvatar";
import { Mail } from "@mui/icons-material";
import { Box, Container, Paper, Typography } from "@mui/material";
import { SendEmailForm } from "./components/SendEmailForm";

export default function SendEmailPage() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 5,
          marginBottom: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AppAvatar avatar={<Mail color="secondary" />} />
          <Typography variant="h5">Enviar email</Typography>
          <SendEmailForm />
        </Box>
      </Paper>
    </Container>
  );
}
