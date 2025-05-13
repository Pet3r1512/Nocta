import { Moon } from "lucide-react";
import SleepOption from "./Sleep/SleepOption";
import { useEffect, useState } from "react";
import type { SleepOption as SleepOptionType } from "./Sleep/SleepOption";
import { useSleepTimeCalculator } from "~/hooks/useSleepTimeCalculator";

export default function Asleep({ wakeUpTime }: { wakeUpTime: string }) {
  const [sleepOptions, setSleepOptions] = useState<SleepOptionType[]>([]);
  const { sleepTimeCalculator } = useSleepTimeCalculator();

  useEffect(() => {
    if (wakeUpTime) {
      const calculated = sleepTimeCalculator(wakeUpTime);
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
