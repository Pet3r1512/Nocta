import { createFileRoute } from "@tanstack/react-router";
import Hero from "~/components/Layout/Hero";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-5 md:px-14 lg:px-0 mb-5">
      <Hero />
    </div>
  );
}
