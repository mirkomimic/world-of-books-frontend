import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      size="icon"
      className="cursor-pointer"
    >
      {theme === "dark" ? <Sun className="text-amber-300" /> : <Moon />}
    </Button>
  );
};

export default ThemeToggle;
