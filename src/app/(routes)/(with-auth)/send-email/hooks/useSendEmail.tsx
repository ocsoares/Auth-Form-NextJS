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
  const [emailSent, setEmailSent] = useState(false);
  const [emailSentTo, setEmailSentTo] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ZodSendEmailSchemaType>({
    mode: "all",
    resolver: zodResolver(zodSendEmailSchema),
  });

  const handleSubmitData = async (data: ISendEmailData): Promise<void> => {
    try {
      await sendEmailService(data);

      setEmailSent(true);
      setEmailSentTo(data.email_to);
      setAlertOpen(true);
      setApiFailed(false);
      setApiFailedMessage("");

      reset();
    } catch (error) {
      setEmailSent(false);
      setEmailSentTo("");
      setAlertOpen(false);
      setApiFailed(true);
      setApiFailedMessage((error as Error).message);
    }
  };

  const handleOnClose = () => {
    setAlertOpen(false);
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    handleSubmitData,
    apiFailed,
    apiFailedMessage,
    emailSent,
    emailSentTo,
    alertOpen,
    handleOnClose,
  };
};
