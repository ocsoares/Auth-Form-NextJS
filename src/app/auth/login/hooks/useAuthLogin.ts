import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ZodLoginSchemaType } from "../types/ZodLoginSchemaType";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodLoginSchema } from "../schemas/zodLoginSchema";
import { ILoginData } from "../types/ILoginData";

export const useAuthLogin = () => {
  const [remember, setRemember] = useState(false);
  const [logged, setLogged] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ZodLoginSchemaType>({
    resolver: zodResolver(zodLoginSchema),
  });

  const handleSubmitData = (data: ILoginData) => {
    console.log("LOGIN DATA:", data);

    // Setar o "logged" de Acordo com a RESPOSTA de uma API se Logou
    // com Sucesso ou NÃO !!!
    setLogged(true);
    reset();
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
  };
};
