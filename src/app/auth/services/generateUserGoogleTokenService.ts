export const generateUserGoogleTokenService = async (googleJWT: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_BACKEND_URL}/generate-user-google-token`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ googleJWT }),
      },
    );
    const { jwt } = await response.json();

    return jwt as string;
  } catch (error) {
    throw new Error(
      "Erro ao gerar o JWT do Google. Tente novamente mais tarde.",
    );
  }
};
