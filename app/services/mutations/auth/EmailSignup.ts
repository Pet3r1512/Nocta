import { useMutation } from '@tanstack/react-query'
import { authClient } from '~/lib/auth-client'

interface EmailSignUpData {
    email: string,
    password: string,
    username: string
}

export function EmailSignup() {
    return useMutation({
        mutationFn: async ({ email, password, username }: EmailSignUpData) => {
            const { data, error } = await authClient.signUp.email({ email, password, name: username })

            if (error) {
                throw new Error(error.message)
            }

            return data
        }
    })
}