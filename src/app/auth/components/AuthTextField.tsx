// NextJS Error Import !!!
// ----------------------------
// import { Grid, TextField } from "@mui/material";

import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Control, Controller, FieldValues } from "react-hook-form";

interface IAuthTextFieldProps {
  control: Control<FieldValues>;
  name: string;
  sm?: number;
  autoFocus?: boolean;
  id: string;
  type: "text" | "email" | "password";
  label: string;
}

const AuthTextField = React.forwardRef(function AuthTextField(
  {
    control,
    name,
    sm,
    autoFocus = false,
    id,
    type,
    label,
  }: IAuthTextFieldProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: "This is required",
      }}
      defaultValue=""
      // field, fieldState: { invalid, error }
      render={({ field }) => (
        <Grid item xs={12} sm={sm}>
          <TextField
            autoFocus={autoFocus}
            color="secondary"
            autoComplete="none"
            required
            fullWidth
            id={id}
            type={type}
            label={label}
            {...field}
          />
        </Grid>
      )}
    />
  );
});

AuthTextField.displayName = "AuthTextField";

export default AuthTextField;
