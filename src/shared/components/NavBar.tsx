"use client";

import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

export function NavBar({ children }: PropsWithChildren) {
  const { data: session } = useSession();

  return (
    <div>
      <h2>NavBar</h2>
      <h3>Olá {session?.user?.user?.firstName}!</h3>
      {children}
    </div>
  );
}
