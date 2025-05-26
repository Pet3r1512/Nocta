import { SignIn } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";
import { useTheme } from "~/hooks/useTheme";
import { dark } from "@clerk/themes";

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const { theme } = useTheme();

  return (
    <section className="flex items-center justify-center">
      <SignIn
        key={theme}
        appearance={{
          baseTheme: theme === "dark" ? dark : undefined,
        }}
        signUpUrl="/auth/sign-up"
      />
    </section>
  );
}
