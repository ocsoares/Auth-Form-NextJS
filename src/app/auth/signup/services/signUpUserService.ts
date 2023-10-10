import { ISignUpData } from "../types/ISignUpData";

export const signUpUserService = async (data: ISignUpData) => {
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

    return response.json();
  } catch (error) {
    throw new Error("Erro ao efetuar o cadastro. Tente novamente mais tarde.");
  }
};
