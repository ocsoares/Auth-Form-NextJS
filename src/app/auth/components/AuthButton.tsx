import Button from "@mui/material/Button";

interface IAuthButtonProps {
  text: string;
}

export function AuthButton({ text }: IAuthButtonProps) {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      {text}
    </Button>
  );
}
