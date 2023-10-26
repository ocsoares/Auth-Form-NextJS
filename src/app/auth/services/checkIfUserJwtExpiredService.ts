export const checkIfUserJwtExpiredService = async (jwt: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_BACKEND_URL}/check-jwt-expired`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ jwt }),
      },
    );
    const { isExpiredJWT } = await response.json();

    return isExpiredJWT as boolean;
  } catch (error) {
    throw new Error(
      "Erro ao checar se o JWT expirou. Tente novamente mais tarde.",
    );
  }
};
