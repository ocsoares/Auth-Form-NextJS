"use client";

import Grid from "@mui/material/Grid";
import { AuthTextField } from "../../components/AuthTextField";
import { useState } from "react";

export function AuthFormFields() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Grid container spacing={4}>
      <AuthTextField
        autoFocus={true}
        sm={6}
        id="first-name"
        name="first-name"
        type="text"
        label="First name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <AuthTextField
        sm={6}
        id="last-name"
        name="last-name"
        type="text"
        label="Last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <AuthTextField
        id="email"
        name="email"
        type="email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <AuthTextField
        id="password"
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <AuthTextField
        id="confirm-password"
        name="confirm-password"
        type="password"
        label="Confirm your password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
    </Grid>
  );
}
