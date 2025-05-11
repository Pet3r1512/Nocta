import { Bed } from "lucide-react";

export interface SleepOption {
  time: string;
  cycles: number;
  type: "Ideal" | "Good" | "Okay";
}

export default function SleepOption({
  sleepOption,
}: {
  sleepOption: SleepOption;
}) {
  const colorMap: Record<string, string> = {
    Ideal: "bg-green-600",
    Good: "bg-yellow-600/95",
    Okay: "bg-orange-600",
  };
  const sleepLengthMap: Record<number, string> = {
    6: "9h",
    5: "7h 30m",
    4: "6h",
  };
  return (
    <div className="group flex items-center gap-x-5 w-full bg-primary/60 rounded-2xl px-5 py-3.5 lg:hover:bg-primary/80 transition-all duration-150 ease-linear">
      <Bed />
      <div className="space-y-1 md:space-y-2.5 flex-1">
        <p className="text-lg lg:text-2xl font-bold">{sleepOption.time}</p>
        <p className="dark:text-gray-300 text-gray-700 lg:group-hover:text-white transition-all duration-150 ease-linear">{`${
          sleepOption.cycles
        } sleep cycles • ${sleepLengthMap[sleepOption.cycles]}`}</p>
      </div>
      <button
        className={`rounded-2xl px-2 py-0.5 font-semibold pb-1 ${
          colorMap[sleepOption.type]
        }`}
      >
        {sleepOption.type}
      </button>
    </div>
  );
}
