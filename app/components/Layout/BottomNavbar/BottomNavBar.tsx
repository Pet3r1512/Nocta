import { useRouter } from "@tanstack/react-router";
import { ReactNode } from "react";
import { cn } from "~/utils/cn";

interface Section {
  icon: ReactNode;
  name: string;
  href: string;
}

export default function BottomNavBar({
  sections,
  currentPathname,
}: {
  sections: Section[];
  currentPathname: string;
}) {
  return (
    <section className="dark:bg-black bg-white shadow-2xl py-1.5 w-full fixed bottom-0 flex items-center justify-center gap-x-5">
      {sections.map((section, index) => {
        return (
          <a
            href={section.href}
            key={index}
            className={cn(
              "flex flex-col gap-y-2 items-center",
              currentPathname == section.href ? "opacity-100" : "opacity-65"
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
