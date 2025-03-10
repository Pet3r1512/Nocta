import { useRouter } from "@tanstack/react-router";
import { Bed, ChartPie, Settings } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "~/utils/cn";

interface Section {
  icon: ReactNode;
  name: string;
  href: string;
}

const ICON_SIZE = 20;
const ICON_STROKE = 2.5;

export default function BottomNavBar() {
  const route = useRouter();

  const sections: Section[] = [
    {
      icon: <Bed size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
      name: "Sleep",
      href: "/",
    },
    {
      icon: <ChartPie size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
      name: "Analytics",
      href: "/analytics",
    },
    {
      icon: <Settings size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
      name: "Settings",
      href: "/settings",
    },
  ];

  return (
    <section className="dark:bg-black bg-white shadow-2xl py-1.5 w-full fixed bottom-0 flex items-center justify-center gap-x-5">
      {sections.map((section, index) => {
        return (
          <a
            href={section.href}
            key={index}
            className={cn(
              "flex flex-col gap-y-2 items-center",
              route.latestLocation.pathname == section.href
                ? "opacity-100"
                : "opacity-65"
            )}
          >
            {section.icon}
            <p className="font-semibold text-xs md:text-sm">{section.name}</p>
          </a>
        );
      })}
    </section>
  );
}
