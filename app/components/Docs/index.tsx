import { Brain } from "lucide-react";
import SleepCycles from "./SleepCycles";
import Advantages from "./Advantages";
import Working from "./Working";

export default function SleepUnderstanding() {
  return (
    <section className="max-w-7xl my-10 mx-auto py-10 space-y-5 lg:space-y-10">
      <h1 className="flex items-center gap-x-3.5 text-2xl lg:text-4xl font-bold text-primary">
        <Brain size={28} />
        Understanding Sleep Cycles
      </h1>
      <SleepCycles />
      <Advantages />
      <Working />
    </section>
  );
}
