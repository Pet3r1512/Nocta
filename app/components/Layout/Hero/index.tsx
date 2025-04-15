import { useState } from "react";
import Asleep from "./Asleep";
import Wakeup from "./Wakeup";

export default function Hero() {
  const [wakeUpTime, setWakeUpTime] = useState<string>("07:00");

  return (
    <section className="max-w-7xl mx-auto py-10 space-y-5 lg:space-y-10">
      <h1 className="text-2xl lg:text-4xl font-bold text-primary text-center">
        Find Your Optimal Bedtime
      </h1>

      <div className="flex flex-col lg:flex-row lg:justify-center gap-x-5 gap-y-6 mb-16 w-full">
        <Wakeup wakeUpTime={wakeUpTime} setWakeUpTime={setWakeUpTime} />
        <Asleep wakeUpTime={wakeUpTime} />
      </div>
    </section>
  );
}
