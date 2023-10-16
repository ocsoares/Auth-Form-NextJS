import Avatar from "@mui/material/Avatar";
import { ReactNode } from "react";

interface IAppAvatarProps {
  avatar: ReactNode;
}

export function AppAvatar({ avatar }: IAppAvatarProps) {
  return <Avatar sx={{ m: 1, bgcolor: "#8F3098" }}>{avatar}</Avatar>;
}
