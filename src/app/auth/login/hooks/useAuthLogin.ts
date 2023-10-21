import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ZodLoginSchemaType } from "../types/ZodLoginSchemaType";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodLoginSchema } from "../schemas/zodLoginSchema";
import { ILoginData } from "../types/ILoginData";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const useAuthLogin = () => {
  const [remember, setRemember] = useState(false);
  const [apiFailed, setApiFailed] = useState(false);
  const [apiFailedMessage, setApiFailedMessage] = useState("");
  const [logged, setLogged] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [invalidCredentialsMessage, setInvalidCredentialsMessage] =
    useState("");

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ZodLoginSchemaType>({
    mode: "all",
    resolver: zodResolver(zodLoginSchema),
  });

  const handleSubmitData = async ({ email, password }: ILoginData) => {
    try {
      const login = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (login?.ok) {
        setLogged(true);
        setInvalidCredentials(false);
        setInvalidCredentialsMessage("");

        reset();

        setTimeout(() => {
          push("/send-email");
        }, 5000);

        return;
      }

      setInvalidCredentials(true);
      setInvalidCredentialsMessage("Credencial inválida !");
    } catch (error) {
      setApiFailed(true);
      setApiFailedMessage((error as Error).message);
    }
  };

  const handleCheckboxChange = () => {
    // Usar "!" em um Boolean INVERTE o Valor ATUAL do Boolean !!!!
    setRemember(!remember);
  };

  const handleGoogleLoginButton = async () => {
    await signIn("google", { redirect: true, callbackUrl: "/send-email" });
  };

  const handleGitHubLoginButton = async () => {
    await signIn("github", { redirect: true, callbackUrl: "/send-email" });
  };

  useEffect(() => {
    console.log("Estado do Remember:", remember);
  }, [remember]);

  return {
    logged,
    register,
    handleSubmit,
    control,
    errors,
    handleSubmitData,
    handleCheckboxChange,
    apiFailed,
    apiFailedMessage,
    invalidCredentials,
    invalidCredentialsMessage,
    handleGoogleLoginButton,
    handleGitHubLoginButton,
  };
};
