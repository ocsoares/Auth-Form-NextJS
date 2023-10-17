import { zodSignUpSchema } from "@/app/auth/signup/schemas/zodSignUpSchema";
import { ZodSignUpSchemaType } from "@/app/auth/signup/types/ZodSignUpSchemaType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ISendEmailData } from "../interfaces/ISendEmailData";

export const useSendEmail = () => {
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

  // TIRAR Depois !!
  console.log("reset", reset);

  const handleSubmitData = (data: ISendEmailData) => {
    console.log("CLICADO !!!");

    console.log("DATA:", data);
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    handleSubmitData,
  };
};
