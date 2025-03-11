import { createFileRoute } from "@tanstack/react-router";
import Logo from "~/components/Layout/Logo";
import SleepTrackerClock from "~/components/Sleep/SleepTracker";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <div className="flex items-center">
        <Logo />
        <h1 className="text-2xl text-primary font-bold">Nocta</h1>
      </div>
      <SleepTrackerClock />
    </div>
  );
}
