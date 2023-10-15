import { signOut, useSession } from "next-auth/react";
import { first } from "lodash";
import { useState } from "react";

export const useSessionData = () => {
  const [isOpenDialogBox, setIsOpenDialogBox] = useState(false);

  const { data: session } = useSession();

  const firstName = session?.user.firstName;
  const lastName = session?.user.lastName;

  const firstLetterFirstName = first(session?.user.firstName);
  const firstLetterLastName = first(session?.user.lastName);

  const handleOpenDialogBox = () => {
    setIsOpenDialogBox(true);
  };

  const handleCloseDialogBox = () => {
    setIsOpenDialogBox(false);
  };

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/auth/login" });
    setIsOpenDialogBox(false);
  };

  return {
    session,
    firstName,
    lastName,
    firstLetterFirstName,
    firstLetterLastName,
    isOpenDialogBox,
    handleOpenDialogBox,
    handleCloseDialogBox,
    handleLogout,
  };
};
