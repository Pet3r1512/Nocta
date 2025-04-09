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
    Good: "bg-yellow-500",
    Okay: "bg-orange-600",
  };
  return (
    <div className="flex items-center gap-x-5 w-full bg-primary/50 rounded-2xl px-5 py-3.5 lg:hover:bg-primary/80 transition-all duration-150 ease-linear">
      <Bed />
      <div className="space-y-2.5 flex-1">
        <p className="text-lg lg:text-2xl font-bold">{sleepOption.time}</p>
        <p className="text-gray-400">{`${sleepOption.cycles} sleep cycles • 9h 15m`}</p>
      </div>
      <button className="bg-green-600 rounded-2xl px-2 py-0.5">
        {sleepOption.type}
      </button>
    </div>
  );
}
