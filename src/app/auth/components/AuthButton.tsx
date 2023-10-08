import Button from "@mui/material/Button";

interface IAuthButtonProps {
  text: string;
  disabled: boolean;
}

export function AuthButton({ text, disabled }: IAuthButtonProps) {
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
