import { z } from "zod";

export const formSchema = z.object({
    name: z.string().trim().min(2).max(50),
    username: z.string().trim().min(2).max(50),
    email: z.string().email(),
    password: z.string().trim().min(8).max(50),
    confirmPassword: z.string().trim().min(8).max(50),
});

export type FormSchema = typeof formSchema;
