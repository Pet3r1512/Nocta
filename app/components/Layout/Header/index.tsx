import ThemeToggle from "~/components/Buttons/ThemeToggle";
import Logo from "../Logo";
// import Auth from "./Auth";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3.5 md:px-5 py-3">
      <Logo />
      <div className="flex items-center gap-x-5">
        {/* <Auth /> */}
        <ThemeToggle />
      </div>
    </header>
  );
}
