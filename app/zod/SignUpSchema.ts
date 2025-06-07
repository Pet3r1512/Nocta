import { z } from "zod"

export const SignUpSchema = z.object(
    {
        email: z.string().email(),
        username: z.string().regex(/^[A-Za-z]+$/, { message: "Username can only contain alphabet characters" }),
        password: z.string().min(8, { message: "Password must has at least 8 characters" }),
        confirmPassword: z.string(),
        acceptTerms: z.boolean()
    }
).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
}).refine((data) => data.acceptTerms === true, {
    message: "You must accept the terms and conditions",
    path: ["acceptTerms"]
})

export type SignUpFormData = z.infer<typeof SignUpSchema>