import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ISendEmailData } from "../types/ISendEmailData";
import { ZodSendEmailSchemaType } from "../types/ZodSendEmailSchemaType";
import { zodSendEmailSchema } from "../schemas/zodSendEmailSchema";
import { sendEmailService } from "../services/sendEmailService";
import { useState } from "react";

export const useSendEmail = () => {
  const [apiFailed, setApiFailed] = useState(false);
  const [apiFailedMessage, setApiFailedMessage] = useState("");

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

  const handleSubmitData = async (data: ISendEmailData): Promise<void> => {
    try {
      await sendEmailService(data);

      console.log("EMAIL ENVIADO !");

      setApiFailed(false);
      setApiFailedMessage("");

      reset();
    } catch (error) {
      setApiFailed(true);
      setApiFailedMessage((error as Error).message);
    }
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    handleSubmitData,
    apiFailed,
    apiFailedMessage,
  };
};
