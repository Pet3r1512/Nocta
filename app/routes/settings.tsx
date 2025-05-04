import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-5 md:px-14 lg:px-0 mb-5">
      <p className="text-center font-semibold text-lg lg:text-2xl">
        Settings Page is coming soon!
      </p>
    </div>
  );
}
