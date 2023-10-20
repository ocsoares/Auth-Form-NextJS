import { ISendEmailData } from "../types/ISendEmailData";
import { ISendEmailResponse } from "../types/ISendEmailResponse";

export const sendEmailService = async (
  data: ISendEmailData,
): Promise<ISendEmailResponse> => {
  try {
    const response = await fetch(`${process.env.SEND_EMAIL_SERVICE_URL}/send`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json() as unknown as ISendEmailResponse;
  } catch (error) {
    throw new Error("Erro ao enviar o email. Tente novamente mais tarde.");
  }
};
