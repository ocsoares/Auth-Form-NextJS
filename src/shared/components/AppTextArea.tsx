import React from "react";
import Grid from "@mui/material/Grid";
import { Control, Controller, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";

interface IAppTextAreaProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  sm?: number;
  rows: number;
  autoFocus?: boolean;
  error?: boolean;
  helperText?: string;
  id: string;
  label: string;
}

const AppTextArea = React.forwardRef(function AppTextArea(
  {
    control,
    name,
    sm,
    rows,
    autoFocus = false,
    error = false,
    helperText = "",
    id,
    label,
  }: IAppTextAreaProps<any>,
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
            multiline
            rows={rows}
            autoFocus={autoFocus}
            error={error}
            helperText={helperText}
            color="secondary"
            autoComplete="none"
            required
            fullWidth
            id={id}
            type={"text"}
            label={label}
            {...field}
          />
        </Grid>
      )}
    />
  );
});

AppTextArea.displayName = "AppTextArea";

export default AppTextArea;
