import { Moon } from "lucide-react";
import SleepOption from "./Sleep/SleepOption";
import { useEffect, useState } from "react";

import type { SleepOption as SleepOptionType } from "./Sleep/SleepOption";

const SLEEP_CYCLE_MINUTES = 90;
const FALL_ASLEEP_MINUTES = 15;

function calculateSleepTimes(wakeUpTime: string): SleepOptionType[] {
  const [hours, minutes] = wakeUpTime.split(":").map(Number);
  const wake = new Date();
  wake.setHours(hours, minutes, 0, 0);

  const cycles: [6, 5, 4] = [6, 5, 4];

  return cycles.map((cycle) => {
    const totalSleepMinutes = cycle * SLEEP_CYCLE_MINUTES + FALL_ASLEEP_MINUTES;
    const sleepTime = new Date(wake.getTime() - totalSleepMinutes * 60000);

    const timeString = sleepTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const type: SleepOptionType["type"] =
      cycle === 6 ? "Ideal" : cycle === 5 ? "Good" : "Okay";

    return {
      time: timeString,
      cycles: cycle,
      type,
    };
  });
}

export default function Asleep({ wakeUpTime }: { wakeUpTime: string }) {
  const [sleepOptions, setSleepOptions] = useState<SleepOptionType[]>([]);

  useEffect(() => {
    if (wakeUpTime) {
      const calculated = calculateSleepTimes(wakeUpTime);
      setSleepOptions(calculated);
    }
  }, [wakeUpTime]);

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
        {sleepOptions.map((option) => (
          <SleepOption key={option.cycles} sleepOption={option} />
        ))}
      </div>

      <p className="text-gray-600 dark:text-gray-200">
        These times account for the average{" "}
        <span className="dark:text-white text-gray-900">15 minutes</span> it
        takes to fall asleep.
      </p>
    </section>
  );
}
