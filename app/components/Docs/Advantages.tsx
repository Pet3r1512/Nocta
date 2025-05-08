import { Activity, Lightbulb, MoonStar } from "lucide-react";

export default function Advantages() {
  const content = [
    {
      icon: <Activity />,
      title: "Why Complete Cycles Matter?",
      answer:
        "Waking up in the middle of a sleep cycle can leave you feeling groggy and tired. By timing your sleep to wake up at the end of a cycle, you're more likely to feel refreshed.",
    },
    {
      icon: <MoonStar />,
      title: "Optimal Sleep Duration",
      answer:
        "Most adults need between 7-9 hours of sleep per night, which translates to about 4-6 complete sleep cycles. Our calculator recommends times for 4, 5, and 6 cycles.",
    },
    {
      icon: <Lightbulb />,
      title: "Sleep Quality Tips",
      answer:
        "Maintain a consistent sleep schedule, avoid screens before bed, keep your bedroom cool and dark, and avoid caffeine and alcohol close to bedtime.",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      {content.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col gap-y-3.5 shadow-2xl bg-primary/60 p-5 rounded-2xl lg:hover:bg-primary/90 transition-all duration-150 ease-linear"
          >
            <div className="flex items-center gap-x-2.5">
              {item.icon}
              <p className="text-lg lg:text-xl font-semibold">{item.title}</p>
            </div>
            <p>{item.answer}</p>
          </div>
        );
      })}
    </div>
  );
}
