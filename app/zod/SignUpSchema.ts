import { z } from "zod"

export const SignUpSchema = z.object(
    {
        email: z.string().email(),
        username: z.string(),
        password: z.string().min(8, { message: "Password must has at least 8 characters" }),
        confirmPassword: z.string()
    }
).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export type SignUpFormData = z.infer<typeof SignUpSchema>