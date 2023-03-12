import ThemeToggle from "components/ThemeToggle";
import MenuToggle from "./Menu";

const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between rounded-full py-4">
      <ThemeToggle />
      <MenuToggle />
    </nav>
  );
};

export default Header;
