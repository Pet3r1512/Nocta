import { Bed, ChartPie, Settings } from "lucide-react";
import { ReactNode } from "react";

interface Section {
  icon: ReactNode;
  name: string;
}

const ICON_SIZE = 20;
const ICON_STROKE = 2.5;

export default function BottomNavBar() {
  const sections: Section[] = [
    {
      icon: <Bed size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
      name: "Sleep",
    },
    {
      icon: <ChartPie size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
      name: "Analytics",
    },
    {
      icon: <Settings size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
      name: "Settings",
    },
  ];

  return (
    <section className="dark:bg-black bg-white shadow-2xl py-1.5 w-full fixed bottom-0 flex items-center justify-center gap-x-5">
      {sections.map((section, index) => {
        return (
          <div key={index} className="flex flex-col gap-y-2 items-center">
            {section.icon}
            <p className="font-semibold text-xs md:text-sm">{section.name}</p>
          </div>
        );
      })}
    </section>
  );
}
