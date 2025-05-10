import ThemeToggle from "~/components/Buttons/ThemeToggle";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3.5 md:px-5 py-3">
      <Logo />
      <ThemeToggle />
    </header>
  );
}
