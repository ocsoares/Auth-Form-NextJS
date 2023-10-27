"use client";

import { checkIfUserJwtExpiredService } from "@/app/auth/services/checkIfUserJwtExpiredService";
import { signOut, useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";

export function CheckIfUserJwtExpired({ children }: PropsWithChildren) {
  const { data: session } = useSession();

  useEffect(() => {
    const checkTokenExpiration = async () => {
      if (session && session.user.jwt) {
        try {
          const isExpiredJWT = await checkIfUserJwtExpiredService(
            session.user.jwt,
          );

          if (isExpiredJWT) {
            await signOut({ redirect: true, callbackUrl: "/auth/login" });
          }

          return null;
        } catch (error) {
          console.log("Error to check if user jwt expired:", error);
        }
      }
    };

    checkTokenExpiration();
  }, [session]);

  return children;
}
