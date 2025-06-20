/* eslint-disable @typescript-eslint/no-explicit-any */
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/utils/cn";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormData, SignUpSchema } from "~/zod/SignUpSchema";
import { EmailSignup } from "~/services/mutations/auth/EmailSignup";
import { toast } from "sonner";
import { Gmail } from "~/services/mutations/auth/Gmail";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const googleSignin = Gmail({
    onSuccess: () => {
      toast.success("Sign In via Google Successfully!");
    },
    onError: (error) => {
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

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="dark:bg-black/50 shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl lg:text-2xl text-primary">
            Welcome back
          </CardTitle>
          <CardDescription>Login with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => googleSignin.mutate()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Login with Google
            </Button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <p className="bg-card text-center text-muted-foreground relative z-10 px-2 mt-8">
                Or continue with
              </p>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="example@email.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-sm form-error">{errors.email.message}</p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    {...register("username")}
                    placeholder="example_username"
                    required
                  />
                  {errors.username && (
                    <p className="text-sm form-error">
                      {errors.username.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={hidePassword ? "password" : "text"}
                      {...register("password")}
                      required
                    />
                    <button
                      tabIndex={-1}
                      className="absolute top-1/2 right-2.5 -translate-y-1/2"
                      onClick={() => {
                        setHidePassword(!hidePassword);
                      }}
                    >
                      {hidePassword ? <Eye /> : <EyeOff />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm form-error">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="confirm_password">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirm_password"
                      type={hideConfirmPassword ? "password" : "text"}
                      {...register("confirmPassword")}
                      required
                    />
                    <button
                      tabIndex={-1}
                      className="absolute top-1/2 right-2.5 -translate-y-1/2"
                      onClick={() => {
                        setHideConfirmPassword(!hideConfirmPassword);
                      }}
                    >
                      {hideConfirmPassword ? <Eye /> : <EyeOff />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm form-error">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <Controller
                  name="acceptTerms"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="acceptTerms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="acceptTerms">
                        I accept the terms and conditions
                      </Label>
                    </div>
                  )}
                />
                {errors.acceptTerms && (
                  <p className="text-sm text-red-500">
                    {errors.acceptTerms.message}
                  </p>
                )}
                <Button type="submit" className="w-full">
                  {signup.isPending ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <p>Create New Account</p>
                  )}
                </Button>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a
                  href="/auth/sign-in"
                  className="underline underline-offset-4 font-semibold"
                >
                  Sign In
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
