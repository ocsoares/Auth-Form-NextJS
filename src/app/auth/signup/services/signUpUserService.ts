import { IBackendResponse } from "../../interfaces/IBackendResponse";
import { ISignUpData } from "../types/ISignUpData";

export const signUpUserService = async (
  data: ISignUpData,
): Promise<IBackendResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_BACKEND_URL}/register`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    return response.json() as unknown as IBackendResponse;
  } catch (error) {
    throw new Error("Erro ao efetuar o cadastro. Tente novamente mais tarde.");
  }
};
