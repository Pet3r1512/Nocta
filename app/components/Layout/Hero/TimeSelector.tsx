import React, { ChangeEvent, useEffect, useState } from "react";
import { ClockIcon } from "lucide-react";

interface TimeSelectorProps {
  time: string;
  onChange: (value: string) => void;
}

function TimeSelector({ time, onChange }: TimeSelectorProps) {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS browsers
    const userAgent = window.navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream);
  }, []);

  const [hours, minutes] = time.split(":").map(Number);
  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <ClockIcon
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/80 dark:text-white"
        />
        {isIOS ? (
          // Custom fallback for iOS
          <input
            type="text"
            value={time}
            onChange={handleTimeChange}
            placeholder="HH:MM"
            className="w-full bg-primary/10 border border-primary rounded-lg py-3 pl-10 pr-4 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        ) : (
          // Default time input
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="w-full bg-primary/10 border border-primary rounded-lg py-3 pl-10 pr-4 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        )}
      </div>
    </div>
  );
}

export default TimeSelector;
