import { z } from "zod";
import { zodSignUpSchema } from "../schemas/zodSignUpSchema";

export type ZodSignUpSchemaType = z.infer<typeof zodSignUpSchema>;
