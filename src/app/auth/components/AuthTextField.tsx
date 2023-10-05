// NextJS Error Import !!!
// ----------------------------
// import { Grid, TextField } from "@mui/material";

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

export function AuthTextField({
  control,
  name,
  sm,
  autoFocus = false,
  id,
  type,
  label,
}: IAuthTextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: "This is required",
      }}
      defaultValue={""}
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
}
