/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Gmail } from "~/services/mutations/auth/Gmail";
import { EmailSignup } from "~/services/mutations/auth/EmailSignup";
import { SignUpFormData, SignUpSchema } from "~/zod/SignUpSchema";

export function useSignUp() {
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState<boolean>(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<SignUpFormData>({
        resolver: zodResolver(SignUpSchema as any),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
        },
    });

    const signup = EmailSignup({
        onSuccess: () => {
            toast.success("Sign Up Successfully!");
        },
        onError: (error: any) => {
            toast.error(error.message);
        },
    });

    const googleSignin = Gmail({
        onSuccess: () => {
            toast.success("Sign In via Google Successfully!");
        },
        onError: (error: any) => {
            toast.error(error.message);
        },
    });

    const onSubmit = async (data: SignUpFormData) => {
        await signup.mutateAsync({
            email: data.email,
            username: data.username,
            password: data.password,
        });
    };
    return {
        register,
        handleSubmit,
        errors,
        control,
        signup,
        googleSignin,
        onSubmit,
        hidePassword,
        setHidePassword,
        hideConfirmPassword,
        setHideConfirmPassword
    }
}
