import { ISendEmailData } from "../types/ISendEmailData";
import { ISendEmailResponse } from "../types/ISendEmailResponse";
import { getSession } from "next-auth/react";

export const sendEmailService = async (
  data: ISendEmailData,
): Promise<ISendEmailResponse> => {
  const session = await getSession();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SEND_EMAIL_SERVICE_URL}/send`,
      {
        method: "POST",
        headers: {
          authorization: `bearer ${session?.user.jwt}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    return response.json() as unknown as ISendEmailResponse;
  } catch (error) {
    throw new Error("Erro ao enviar o email. Tente novamente mais tarde.");
  }
};
