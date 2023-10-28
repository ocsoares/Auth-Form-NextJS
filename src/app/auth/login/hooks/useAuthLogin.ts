import { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodLoginSchemaType } from "../types/ZodLoginSchemaType";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodLoginSchema } from "../schemas/zodLoginSchema";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { TOO_MANY_REQUEST_ERROR_MESSAGE } from "@/shared/constants/tooManyRequestsErrorMessage";
import { ILoginData } from "../types/ILoginData";

export const useAuthLogin = () => {
  const [remember, setRemember] = useState(false);
  const [apiFailed, setApiFailed] = useState(false);
  const [apiFailedMessage, setApiFailedMessage] = useState("");
  const [logged, setLogged] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [invalidCredentialsMessage, setInvalidCredentialsMessage] =
    useState("");
  const [tooManyRequestError, setTooManyRequestError] = useState(false);
  const [tooManyRequestErrorMessage, setTooManyRequestErrorMessage] =
    useState("");

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ZodLoginSchemaType>({
    mode: "all",
    resolver: zodResolver(zodLoginSchema),
  });

  const handleSubmitData = async ({ email, password }: ILoginData) => {
    try {
      const login = await signIn("credentials", {
        email,
        password,
        remember,
        redirect: false,
      });

      if (login?.error === TOO_MANY_REQUEST_ERROR_MESSAGE) {
        setInvalidCredentials(false);
        setInvalidCredentialsMessage("");

        setTooManyRequestError(true);
        setTooManyRequestErrorMessage(
          "Limite de tentativas de login excedidas. Tente novamente mais tarde.",
        );

        reset();

        return;
      }

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

      reset();
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

  return {
    logged,
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    handleSubmitData,
    handleCheckboxChange,
    apiFailed,
    apiFailedMessage,
    invalidCredentials,
    invalidCredentialsMessage,
    tooManyRequestError,
    tooManyRequestErrorMessage,
    handleGoogleLoginButton,
    handleGitHubLoginButton,
  };
};
