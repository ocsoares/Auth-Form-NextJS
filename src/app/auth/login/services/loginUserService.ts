import { ILoginResponse } from "../../interfaces/ILoginResponse";
import { ILoginData } from "../types/ILoginData";

export const loginUserService = async (
  data: ILoginData,
): Promise<ILoginResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_BACKEND_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    return response.json() as unknown as ILoginResponse;
  } catch (error) {
    throw new Error("Erro ao efetuar o login. Tente novamente mais tarde.");
  }
};
