import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/nextAuthOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export async function PageWithAuth({ children }: PropsWithChildren) {
  const currentSession = await getServerSession(nextAuthOptions);

  if (!currentSession) {
    redirect("/auth/login");
  }

  return <div>{children}</div>;
}
