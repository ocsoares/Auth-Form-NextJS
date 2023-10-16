// NextJS Error Import !!!
// ----------------------------
// import { Grid, TextField } from "@mui/material";

import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Control, Controller, FieldValues } from "react-hook-form";

interface IAppTextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  sm?: number;
  autoFocus?: boolean;
  error?: boolean;
  helperText?: string;
  id: string;
  type: "text" | "email" | "password";
  label: string;
}

const AppTextField = React.forwardRef(function AppTextField(
  {
    control,
    name,
    sm,
    autoFocus = false,
    error = false,
    helperText = "",
    id,
    type,
    label,
  }: IAppTextFieldProps<any>,
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
            error={error}
            helperText={helperText}
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

AppTextField.displayName = "AppTextField";

export default AppTextField;
