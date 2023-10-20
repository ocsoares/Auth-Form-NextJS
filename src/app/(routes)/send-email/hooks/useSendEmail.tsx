import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ISendEmailData } from "../types/ISendEmailData";
import { ZodSendEmailSchemaType } from "../types/ZodSendEmailSchemaType";
import { zodSendEmailSchema } from "../schemas/zodSendEmailSchema";

export const useSendEmail = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ZodSendEmailSchemaType>({
    mode: "all",
    resolver: zodResolver(zodSendEmailSchema),
  });

  const handleSubmitData = (data: ISendEmailData) => {
    console.log("CLICADO !!!");

    console.log("DATA:", data);

    reset();
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    handleSubmitData,
  };
};
