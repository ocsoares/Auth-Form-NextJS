import { z } from "zod";
import { zodLoginSchema } from "../schemas/zodLoginSchema";

export type ZodLoginSchemaData = z.infer<typeof zodLoginSchema>;
