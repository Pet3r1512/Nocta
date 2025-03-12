import { useEffect, useState } from "react";

export default function SleepTrackerClock() {
  const [bedtime, setBedtime] = useState(() => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  });

  const [alarm, setAlarm] = useState("08:25");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setBedtime(
        `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const parseTime = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return { hours: h, minutes: m };
  };

  const { hours: bedtimeHours, minutes: bedtimeMinutes } = parseTime(bedtime);

  const bedtimeHourAngle = (bedtimeHours % 12) * 30 + bedtimeMinutes * 0.5;
  const bedtimeMinuteAngle = bedtimeMinutes * 6;

  return (
    <div className="flex flex-col items-center justify-between min-h-[80dvh]">
      {/* Clock UI */}
      <div className="relative mt-6 w-60 h-60 flex items-center justify-center">
        {/* Clock Face */}
        <div className="absolute w-full h-full border-[10px] border-primary rounded-full"></div>

        {/* Time indicators */}
        <div className="absolute top-3.5 text-lg font-bold">12</div>
        <div className="absolute bottom-3.5 text-lg font-bold">6</div>
        <div className="absolute right-3.5 text-lg font-bold">3</div>
        <div className="absolute left-3.5 text-lg font-bold">9</div>

        {/* Clock Hands */}
        <div
          className="absolute w-1 h-12 bg-primary origin-center"
          style={{
            transform: `rotate(${bedtimeHourAngle}deg) translateY(-30px)`,
          }}
        />
        <div
          className="absolute w-1 h-20 bg-gray-400 origin-center"
          style={{
            transform: `rotate(${bedtimeMinuteAngle}deg) translateY(-35px)`,
          }}
        />

        {/* Center Dot */}
        <div className="absolute w-3 h-3 bg-black rounded-full"></div>
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
