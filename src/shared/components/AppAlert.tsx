import { Alert, AlertTitle, Grow } from "@mui/material";
import { ReactNode } from "react";

interface IAppAlertProps {
  showAlert: boolean;
  color?: "error" | "info" | "success" | "warning";
  severity: "error" | "info" | "success" | "warning";
  onClose?: () => void;
  title: string;
  message?: string;
  messageHTML?: ReactNode;
  timeout?: number;
}

export function AppAlert({
  showAlert,
  color,
  severity,
  onClose,
  title,
  message,
  messageHTML,
  timeout,
}: IAppAlertProps) {
  return (
    <Grow in={showAlert} timeout={timeout}>
      <Alert color={color} severity={severity} onClose={onClose}>
        <AlertTitle>{title}</AlertTitle>
        {message}
        {messageHTML}
      </Alert>
    </Grow>
  );
}
