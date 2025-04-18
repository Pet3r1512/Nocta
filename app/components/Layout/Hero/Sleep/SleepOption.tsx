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
  return (
    <div className="group flex items-center gap-x-5 w-full bg-primary/60 rounded-2xl px-5 py-3.5 lg:hover:bg-primary/80 transition-all duration-150 ease-linear">
      <Bed />
      <div className="space-y-1 md:space-y-2.5 flex-1">
        <p className="text-lg lg:text-2xl font-bold">{sleepOption.time}</p>
        <p className="text-gray-300 lg:group-hover:text-white transition-all duration-150 ease-linear">{`${sleepOption.cycles} sleep cycles • 9h 15m`}</p>
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
