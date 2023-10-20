import { z } from "zod";
import { zodSendEmailSchema } from "../schemas/zodSendEmailSchema";

export type ZodSendEmailSchemaType = z.infer<typeof zodSendEmailSchema>;
