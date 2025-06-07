import { z, ZodType } from "zod/v4"

export interface SignUpFormData {
    email: string,
    username: string,
    password: string,
    confirmPassword: string
}

export const SignUpSchema: ZodType<SignUpFormData> = z.object(
    {
        email: z.email(),
        username: z.string(),
        password: z.string().min(8, { message: "Password must has at least 8 characters" }),
        confirmPassword: z.string()
    }
).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})