import Asleep from "./Asleep";
import Wakeup from "./Wakeup";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-2xl lg:text-3xl font-bold text-primary text-center">
        Find Your Optimal Bedtime
      </h1>

      <div className="flex flex-col lg:flex-row gap-x-5 mb-16 w-full">
        <Wakeup />
        <Asleep />
      </div>
    </section>
  );
}
