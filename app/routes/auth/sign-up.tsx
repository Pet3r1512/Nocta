import { SignUp } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";
import { useTheme } from "~/hooks/useTheme";
import { dark } from "@clerk/themes";

export const Route = createFileRoute("/auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  const { theme } = useTheme();

  return (
    <section className="flex items-center justify-center">
      <SignUp
        key={theme}
        appearance={{
          baseTheme: theme === "dark" ? dark : undefined,
        }}
        signInUrl="/auth/sign-in"
      />
    </section>
  );
}
