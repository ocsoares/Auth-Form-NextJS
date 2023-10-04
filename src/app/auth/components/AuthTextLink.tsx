import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface IAuthTextLinkProps {
  text: string;
  link: string;
  textLink: string;
}

export function AuthTextLink({ text, link, textLink }: IAuthTextLinkProps) {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="body2" color={"whitesmoke"}>
          {text}
          <Link
            href={link}
            variant="body2"
            underline="hover"
            color={"slateblue"}
          >
            {textLink}
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
