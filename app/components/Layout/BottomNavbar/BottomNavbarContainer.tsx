import { useRouter } from "@tanstack/react-router";
import { Bed, ChartPie, Settings } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

const ICON_SIZE = 20;
const ICON_STROKE = 2.5;

export default function BottomNavbarContainer({
  pathname,
}: {
  pathname: string;
}) {
  const route = useRouter();
  const currentPathname = pathname || route.latestLocation.pathname;
  const sections = [
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

  return <BottomNavBar sections={sections} currentPathname={currentPathname} />;
}
