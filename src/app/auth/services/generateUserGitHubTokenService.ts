export const generateUserGitHubTokenService = async (githubToken: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_BACKEND_URL}/generate-user-github-token`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ githubToken }),
      },
    );
    const { jwt } = await response.json();

    return jwt as string;
  } catch (error) {
    throw new Error(
      "Erro ao gerar o JWT do GitHub. Tente novamente mais tarde.",
    );
  }
};
