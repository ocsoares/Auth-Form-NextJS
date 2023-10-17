import { ZodType, z } from "zod";
import { capitalize } from "lodash";
import { IZodTypeData } from "../../interfaces/IZodTypeData";

export const zodSignUpSchema = z
  .object({
    firstName: z
      .string({ required_error: "O primeiro nome é obrigatório !" })
      .min(4, "O primeiro nome deve ter no mínimo 4 caracteres !")
      .transform((firstName) => {
        firstName = firstName.trim();
        firstName = firstName.replaceAll(" ", "");
        firstName = capitalize(firstName);

        return firstName;
      }),

    lastName: z
      .string({ required_error: "O último nome é obrigatório !" })
      .min(4, "O último nome deve ter no mínimo 4 caracteres !")
      .transform((lastName) => {
        lastName = lastName.trim();
        lastName = lastName.replaceAll(" ", "");
        lastName = capitalize(lastName);

        return lastName;
      }),

    email: z
      .string({ required_error: "O email é obrigatório !" })
      .min(1, "O email é obrigatório !")
      .email("Formato de email inválido !"),

    password: z
      .string({ required_error: "A senha é obrigatória !" })
      .min(7, "A senha precisa ter no mínimo 7 caracteres !"),

    confirmPassword: z
      .string({ required_error: "A confirmação de senha é obrigatória !" })
      .min(1, "A confirmação da senha é obrigatória !"),

    subjectEmail: z
      .string({ required_error: "O assunto do email é obrigatório !" })
      .min(1, "O assunto do email é obrigatório !"),

    textEmail: z
      .string({ required_error: "O texto do email é obrigatório !" })
      .min(1, "O texto do email é obrigatório !"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais !",
    path: ["confirmPassword"],
  }) satisfies ZodType<IZodTypeData>;
