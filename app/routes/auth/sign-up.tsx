import { createFileRoute } from "@tanstack/react-router";
import SignUp from "~/components/Auth/SignUp";

export const Route = createFileRoute("/auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-muted flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignUp />
      </div>
    </div>
  );
}
