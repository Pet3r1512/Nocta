import React from "react";
import { ClockIcon } from "lucide-react";
interface TimeSelectorProps {
  time: string;
  onChange: (value: string) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ time, onChange }) => {
  // Convert time string to hours and minutes
  const [hours, minutes] = time.split(":").map(Number);
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <ClockIcon
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/30"
        />
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className="w-full bg-primary/10 border border-primary rounded-lg py-3 pl-10 pr-4 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className="bg-primary/80 rounded-full py-3 px-8 text-center text-2xl font-bold">
          {hours === 0 ? "12" : hours > 12 ? hours - 12 : hours}:
          {minutes.toString().padStart(2, "0")} {hours >= 12 ? "PM" : "AM"}
        </div>
      </div>
    </div>
  );
};
export default TimeSelector;
