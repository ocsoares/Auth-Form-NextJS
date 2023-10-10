import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodSignUpSchemaData } from "../types/ZodSignUpSchemaData";
import { zodSignUpSchema } from "../schemas/zodSignUpSchema";
import { ISignUpData } from "../types/ISignUpData";
import { zodResolver } from "@hookform/resolvers/zod";

export const useAuthSignUp = () => {
  const [formSent, setFormSent] = useState(false);

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ZodSignUpSchemaData>({
    mode: "all",
    resolver: zodResolver(zodSignUpSchema),
  });

  const handleSubmitData = (data: ISignUpData) => {
    console.log("SIGNUP DATA:", data);

    setFormSent(true);
    reset();

    setTimeout(() => {
      push("/auth/login");
    }, 5000);
  };

  return {
    formSent,
    register,
    handleSubmit,
    control,
    errors,
    handleSubmitData,
  };
};
