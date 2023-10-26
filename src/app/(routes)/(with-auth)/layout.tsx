import { PropsWithChildren } from "react";
import { CheckIfUserJwtExpired } from "./components/CheckIfUserJwtExpired";

export default function WithAuthLayout({ children }: PropsWithChildren) {
  return <CheckIfUserJwtExpired>{children}</CheckIfUserJwtExpired>;
}
