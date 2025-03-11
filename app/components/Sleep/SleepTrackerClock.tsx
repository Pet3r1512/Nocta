import { useState } from "react";

export default function SleepTrackerClock() {
  const [bedtime, setBedtime] = useState("01:55");
  const [alarm, setAlarm] = useState("08:25-08:55");

  return (
    <div className="flex flex-col items-center justify-between min-h-[80dvh]">
      {/* Clock UI */}
      <div className="relative mt-6 w-60 h-60 flex items-center justify-center">
        <div className="absolute w-full h-full border-[10px] border-gray-800 rounded-full"></div>

        {/* Time indicators */}
        <div className="absolute top-3.5 text-lg font-bold">12</div>
        <div className="absolute bottom-3.5 text-lg font-bold">6</div>
        <div className="absolute right-3.5 text-lg font-bold">3</div>
        <div className="absolute left-3.5 text-lg font-bold">9</div>

        {/* Sleep duration arc */}
        <div className="absolute w-full h-full rounded-full border-[12.5px] border-transparent border-r-primary border-t-primary transform rotate-[135deg]"></div>

      </div>

      {/* Bedtime & Alarm */}
      <div className="mt-6 w-64 space-y-4">
        <div className="flex justify-between text-lg">
          <span className="text-gray-400">Bedtime</span>
          <span>{bedtime}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="text-gray-400">Alarm</span>
          <span>{alarm}</span>
        </div>
      </div>

      {/* Sleep Now Button */}
      <button className="mt-6 w-64 py-3 bg-white text-black font-semibold rounded-lg">
        Sleep Now
      </button>
    </div>
  );
}
