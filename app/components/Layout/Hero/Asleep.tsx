import { Moon } from "lucide-react";
import SleepOption from "./Sleep/SleepOption";

export default function Asleep() {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-x-2">
        <Moon
          className="text-gray-300 dark:text-white"
          size={20}
          strokeWidth={2.5}
        />
        <p className="lg:text-lg font-semibold">
          Fall asleep at one of these times:
        </p>
      </div>
      <div className="space-y-5">
        <SleepOption
          sleepOption={{ time: "9:45PM", cycles: 6, type: "Ideal" }}
        />
        <SleepOption
          sleepOption={{ time: "11:15PM", cycles: 5, type: "Good" }}
        />
        <SleepOption
          sleepOption={{ time: "00:45AM", cycles: 4, type: "Okay" }}
        />
      </div>
      <p className="text-gray-400 dark:text-gray-500">
        These times account for the average 15 minutes it takes to fall asleep.
      </p>
    </section>
  );
}
