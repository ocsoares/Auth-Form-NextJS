import { z } from "zod";
import { zodLoginSchema } from "../schemas/zodLoginSchema";

export type ZodLoginSchemaType = z.infer<typeof zodLoginSchema>;
