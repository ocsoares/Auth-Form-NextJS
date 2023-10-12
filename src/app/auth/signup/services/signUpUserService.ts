import { ISignUpResponse } from "../../interfaces/ISignUpResponse";
import { ISignUpData } from "../types/ISignUpData";

export const signUpUserService = async (
  data: ISignUpData,
): Promise<ISignUpResponse> => {
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

    return response.json() as unknown as ISignUpResponse;
  } catch (error) {
    throw new Error("Erro ao efetuar o cadastro. Tente novamente mais tarde.");
  }
};
