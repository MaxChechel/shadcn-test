import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./ui/navigation-menu.jsx";

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dropdown One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-96 p-5">
              <li>
                <NavigationMenuLink>Item One</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Item Two</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Item Three</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dropdown Two</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-96 p-5">
              <li>
                <NavigationMenuLink>Item One</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Item Two</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Item Three</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
