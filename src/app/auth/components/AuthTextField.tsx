// NextJS Error Import !!!
// ----------------------------
// import { Grid, TextField } from "@mui/material";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

interface IAuthTextFieldProps {
  sm?: number;
  autoFocus?: boolean;
  name: string;
  id: string;
  type: "text" | "email" | "password";
  label: string;
}

export function AuthTextField({
  sm,
  autoFocus = false,
  name,
  id,
  type,
  label,
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
      />
    </Grid>
  );
}
