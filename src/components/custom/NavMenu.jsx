import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";

const NavMenu = () => {
  const links = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/books",
      name: "Books",
    },
    {
      href: "/dashboard",
      name: "Dashboard",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.name}>
            <NavigationMenuLink asChild>
              <NavLink
                to={link.href}
                className="text-gray-200/60 hover:bg-transparent hover:text-primary uppercase"
              >
                {link.name}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
