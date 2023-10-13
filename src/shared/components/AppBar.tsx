"use client";

import {
  AppBar as MaterialAppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { PropsWithChildren } from "react";
import { Logout } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import { useSessionData } from "../hooks/useSessionData";

export function AppBar({ children }: PropsWithChildren) {
  const {
    firstName,
    lastName,
    firstLetterFirstName,
    firstLetterLastName,
    handleOpenDialogBox,
    handleCloseDialogBox,
    isOpenDialogBox,
    handleLogout,
  } = useSessionData();

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
              onClick={handleOpenDialogBox}
            >
              <Logout />
            </IconButton>

            <Dialog
              open={isOpenDialogBox}
              onClose={handleCloseDialogBox}
              aria-labelledby="alert-dialog-logout"
              aria-describedby="dialog-to-logout"
            >
              <DialogTitle id="alert-dialog-logout">
                Tem certeza que quer sair?
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="dialog-to-logout">
                  Confirme abaixo se você quer mesmo sair da aplicação. Se sim,
                  você será redirecionado para a página de login.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={handleCloseDialogBox}>
                  Discordar
                </Button>
                <Button color="secondary" onClick={handleLogout} autoFocus>
                  Confirmar
                </Button>
              </DialogActions>
            </Dialog>

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
