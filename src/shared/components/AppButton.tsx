import Button from "@mui/material/Button";

interface IAppButtonProps {
  text: string;
  disabled?: boolean;
}

export function AppButton({ text, disabled }: IAppButtonProps) {
  return (
    <Button
      type="submit"
      disabled={disabled}
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {text}
    </Button>
  );
}
