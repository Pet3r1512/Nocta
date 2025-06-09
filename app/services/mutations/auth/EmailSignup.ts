import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { authClient } from '~/lib/auth-client'

// input
interface EmailSignUpData {
    email: string,
    password: string,
    username: string
}

// output
type EmailSignupResponse = Awaited<
    ReturnType<typeof authClient.signUp.email>
>['data']


export function EmailSignup(
    options?: UseMutationOptions<EmailSignupResponse, Error, EmailSignUpData>
) {
    return useMutation<EmailSignupResponse, Error, EmailSignUpData>({
        mutationFn: async ({ email, password, username }: EmailSignUpData) => {
            const { data, error } = await authClient.signUp.email({ email, password, name: username })

            if (error) {
                throw new Error(error.message)
            }

            return data
        },
        ...options
    })
}