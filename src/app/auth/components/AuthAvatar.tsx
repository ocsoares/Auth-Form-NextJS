import Avatar from "@mui/material/Avatar";
import { ReactNode } from "react";

interface IAuthAvatarProps {
  avatar: ReactNode;
}

export function AuthAvatar({ avatar }: IAuthAvatarProps) {
  return <Avatar sx={{ m: 1, bgcolor: "#8F3098" }}>{avatar}</Avatar>;
}
