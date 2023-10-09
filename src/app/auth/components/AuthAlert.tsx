import { Alert, AlertTitle, Grow } from "@mui/material";
import { ReactNode } from "react";

interface IAuthAlertProps {
  showAlert: boolean;
  color?: "error" | "info" | "success" | "warning";
  severity: "error" | "info" | "success" | "warning";
  title: string;
  message?: string;
  messageHTML?: ReactNode;
  timeout?: number;
}

export function AuthAlert({
  showAlert,
  color,
  severity,
  title,
  message,
  messageHTML,
  timeout,
}: IAuthAlertProps) {
  return (
    <Grow in={showAlert} timeout={timeout}>
      <Alert color={color} severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message}
        {messageHTML}
      </Alert>
    </Grow>
  );
}
