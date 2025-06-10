import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { authClient } from "~/lib/auth-client";

type GmailResponse = Awaited<ReturnType<typeof authClient.signIn.social>>

export function Gmail(options?: UseMutationOptions<GmailResponse, Error>) {
    return useMutation<GmailResponse, Error>({
        mutationFn: async () => {
            const { data, error } = await authClient.signIn.social({
                provider: "google",
                callbackURL: "/"
            })

            if (error) {
                throw new Error(error.message)
            }

            return data
        },
        ...options
    })
}