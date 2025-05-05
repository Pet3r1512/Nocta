import ThemeToggle from "~/components/Buttons/ThemeToggle";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3.5 md:px-5 py-3">
      <div className="flex items-center">
        <Logo />
        <h1 className="text-2xl text-primary font-bold">Nocta</h1>
      </div>
      <ThemeToggle />
    </header>
  );
}
