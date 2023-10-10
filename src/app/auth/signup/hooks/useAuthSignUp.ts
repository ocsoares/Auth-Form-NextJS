import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodSignUpSchemaType } from "../types/ZodSignUpSchemaType";
import { zodSignUpSchema } from "../schemas/zodSignUpSchema";
import { ISignUpData } from "../types/ISignUpData";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUserService } from "../services/signUpUserService";

export const useAuthSignUp = () => {
  const [formSent, setFormSent] = useState(false);

  const [apiFailed, setApiFailed] = useState(false);
  const [apiFailedMessage, setApiFailedMessage] = useState("");

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ZodSignUpSchemaType>({
    mode: "all",
    resolver: zodResolver(zodSignUpSchema),
  });

  const handleSubmitData = async (data: ISignUpData) => {
    try {
      await signUpUserService(data);

      setFormSent(true);
      reset();

      setTimeout(() => {
        push("/auth/login");
      }, 5000);
    } catch (error) {
      setApiFailed(true);
      setApiFailedMessage((error as Error).message);
    }
  };

  return {
    formSent,
    register,
    handleSubmit,
    control,
    errors,
    handleSubmitData,
    apiFailed,
    apiFailedMessage,
  };
};
