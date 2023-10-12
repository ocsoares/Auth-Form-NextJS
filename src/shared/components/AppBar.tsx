"use client";

import {
  AppBar as MaterialAppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";
import { Logout } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import { first } from "lodash";

export function AppBar({ children }: PropsWithChildren) {
  const { data: session } = useSession();

  const firstName = session?.user.user.firstName;
  const lastName = session?.user.user.lastName;

  const firstLetterFirstName = first(session?.user.user.firstName);
  const firstLetterLastName = first(session?.user.user.lastName);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <MaterialAppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logout"
              sx={{ mr: 2 }}
            >
              <Logout />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logout
            </Typography>
            <Typography
              variant="h6"
              sx={{ mr: 2 }}
            >{`${firstName} ${lastName}`}</Typography>
            <Avatar
              alt="Sua foto de avatar"
              sx={{ bgcolor: deepPurple["300"] }}
            >
              {firstLetterFirstName}
              {firstLetterLastName}
            </Avatar>
          </Toolbar>
        </MaterialAppBar>
      </Box>
      {children}
    </div>
  );
}
