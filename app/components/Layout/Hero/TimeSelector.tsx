import { ChevronUpIcon, ChevronDownIcon, ClockIcon } from "lucide-react";
import { useTimeSelector } from "~/hooks/useTimeSelector";

export default function TimeSelector({
  time,
  onChange,
}: {
  time: string;
  onChange: (value: string) => void;
}) {
  const {
    hours,
    minutes,
    isPM,
    incrementHours,
    decrementHours,
    incrementMinutes,
    decrementMinutes,
    toggleAMPM,
  } = useTimeSelector(time, onChange);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Hours */}
        <div className="bg-primary/85 rounded-lg p-2">
          <button
            onClick={incrementHours}
            className="w-full h-12 flex items-center justify-center hover:bg-primary/85 rounded-lg transition-colors"
            aria-label="Increment hours"
          >
            <ChevronUpIcon className="w-6 h-6" />
          </button>
          <div className="text-2xl font-bold text-center py-3">
            {hours === 0 ? 12 : hours}
          </div>
          <button
            onClick={decrementHours}
            className="w-full h-12 flex items-center justify-center hover:bg-primary/85 rounded-lg transition-colors"
            aria-label="Decrement hours"
          >
            <ChevronDownIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Minutes */}
        <div className="bg-primary/85 rounded-lg p-2">
          <button
            onClick={incrementMinutes}
            className="w-full h-12 flex items-center justify-center hover:bg-primary/85 rounded-lg transition-colors"
            aria-label="Increment minutes"
          >
            <ChevronUpIcon className="w-6 h-6" />
          </button>
          <div className="text-2xl font-bold text-center py-3">
            {minutes.toString().padStart(2, "0")}
          </div>
          <button
            onClick={decrementMinutes}
            className="w-full h-12 flex items-center justify-center hover:bg-primary/85 rounded-lg transition-colors"
            aria-label="Decrement minutes"
          >
            <ChevronDownIcon className="w-6 h-6" />
          </button>
        </div>
        {/* AM/PM */}
        <button
          onClick={toggleAMPM}
          className="bg-primary/85 rounded-lg p-4 flex items-center justify-center hover:bg-primary/85 transition-colors"
        >
          <span className="text-2xl font-bold">{isPM ? "PM" : "AM"}</span>
        </button>
      </div>
      {/* Current time display */}
      <div className="flex items-center gap-2 bg-primary/85 rounded-lg px-4 py-2">
        <ClockIcon className="text-black dark:text-white" size={20} />
        <span className="text-lg">
          {hours === 0 ? 12 : hours}:{minutes.toString().padStart(2, "0")}{" "}
          {isPM ? "PM" : "AM"}
        </span>
      </div>
    </div>
  );
}
