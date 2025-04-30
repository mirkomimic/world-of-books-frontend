import ThemeToggle from "@/components/custom/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import { BookOpenText } from "lucide-react";
import { Link } from "react-router";

const Header = ({ nav }) => {
  return (
    <header className="h-[80px] w-full    ">
      <div className="container mx-auto flex h-full items-center">
        <Link to="/" className="flex gap-3">
          <BookOpenText /> <span>WoB</span>
        </Link>
        <div className="mx-auto">{nav}</div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <div>Login</div>
          <div>Register</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
