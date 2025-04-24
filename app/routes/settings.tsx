import { createFileRoute } from "@tanstack/react-router";
import Logo from "~/components/Layout/Logo";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-5 md:px-14 lg:px-0 mb-5">
      <div className="flex items-center">
        <Logo />
        <h1 className="text-2xl text-primary font-bold">Nocta</h1>
      </div>
      <p className="text-center font-semibold text-lg lg:text-2xl">
        Settings Page is coming soon!
      </p>
    </div>
  );
}
