// NextJS Error Import !!!
// ----------------------------
// import { Grid, TextField } from "@mui/material";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

interface IAuthTextFieldProps {
  sm?: number;
  autoFocus?: boolean;
  name: string;
  id: string;
  type: "text" | "email" | "password";
  label: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export function AuthTextField({
  sm,
  autoFocus = false,
  name,
  id,
  type,
  label,
  value,
  onChange,
}: IAuthTextFieldProps) {
  return (
    <Grid item xs={12} sm={sm}>
      <TextField
        autoFocus={autoFocus}
        color="secondary"
        autoComplete="none"
        name={name}
        required
        fullWidth
        id={id}
        type={type}
        label={label}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
}
