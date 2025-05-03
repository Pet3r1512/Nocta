import { Moon, Sun } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";
import { cn } from "~/utils/cn";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-testid="theme-togger"
      onClick={toggleTheme}
      className={cn(
        "!size-8 rounded-full flex items-center justify-center bg-gray-500 dark:bg-gray-200 transition-all duration-150 ease-linear p-1.5",
        className
      )}
    >
      {theme === "light" ? (
        <Moon className="text-white" />
      ) : (
        <Sun className="text-orange-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
