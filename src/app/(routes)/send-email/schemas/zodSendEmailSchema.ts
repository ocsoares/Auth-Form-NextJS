import { z, ZodType } from "zod";
import { ISendEmailData } from "../types/ISendEmailData";

export const zodSendEmailSchema = z.object({
  email_to: z
    .string({ required_error: "O email é obrigatório !" })
    .min(1, "O email é obrigatório !")
    .email("Formato de email inválido !"),

  subject: z
    .string({ required_error: "O assunto do email é obrigatório !" })
    .min(1, "O assunto do email é obrigatório !"),

  text: z
    .string({ required_error: "O texto do email é obrigatório !" })
    .min(1, "O texto do email é obrigatório !"),
}) satisfies ZodType<ISendEmailData>;
