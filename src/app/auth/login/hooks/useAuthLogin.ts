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
    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    if (login?.ok) {
      setLogged(true);
      setInvalidCredentials(false);
      setInvalidCredentialsMessage("");

      reset();

      setTimeout(() => {
        push("/home");
      }, 5000);

      return;
    }

    setInvalidCredentials(true);
    setInvalidCredentialsMessage("Credencial inválida !");
  };

  const handleCheckboxChange = () => {
    // Usar "!" em um Boolean INVERTE o Valor ATUAL do Boolean !!!!
    setRemember(!remember);
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
    invalidCredentials,
    invalidCredentialsMessage,
  };
};
