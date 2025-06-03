import { createAPIFileRoute } from '@tanstack/react-start/api'
import { auth } from '~/lib/auth'

export const APIRoute = createAPIFileRoute('/api/auth/sign-up/email')({
    GET: ({ request }) => {
        return auth.handler(request)
    },
    POST: ({ request }) => {
        return auth.handler(request)
    },
})