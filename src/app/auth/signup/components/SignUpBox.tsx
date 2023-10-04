"use client";

import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export function SignUpBox({ children }: PropsWithChildren) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      firstName: data.get("first-name"),
      lastName: data.get("last-name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirm-password"),
    });
  };

  return (
    <div>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {children}
      </Box>
    </div>
  );
}
