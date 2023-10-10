import { z } from "zod";
import { zodSignUpSchema } from "../schemas/zodSignUpSchema";

export type ZodSignUpSchemaData = z.infer<typeof zodSignUpSchema>;
