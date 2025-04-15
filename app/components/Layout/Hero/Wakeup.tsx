import { Sun } from "lucide-react";
import TimeSelector from "./TimeSelector";

export default function Wakeup({
  wakeUpTime,
  setWakeUpTime,
}: {
  wakeUpTime: string;
  setWakeUpTime: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-x-2">
        <Sun className="text-yellow-400" size={20} strokeWidth={2.5} />
        <p className="lg:text-lg font-semibold">I want to wake up at</p>
      </div>
      <TimeSelector
        time={wakeUpTime}
        onChange={(time: string) => {
          setWakeUpTime(time);
        }}
      />
      <p className="text-gray-400 dark:text-gray-500">
        Select your desired wake-up time, and we'll calculate the best times to
        go to sleep.
      </p>
    </section>
  );
}
