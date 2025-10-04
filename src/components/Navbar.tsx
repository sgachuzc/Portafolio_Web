import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { BriefcaseBusiness, Cpu, FolderRoot, User } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import type { MenuOption } from "@/interfaces/MenuOption"

export const Navbar = () => {

  const menuOptions: MenuOption[] = [
    {
      label: "Acerca de",
      href: "#about",
      icon: <User className="size-4 cursor-pointer" color="black"/>
    },
    {
      label: "Experiencia",
      href: "#experience",
      icon: <BriefcaseBusiness className="size-4 cursor-pointer" color="black"/>
    },
    {
      label: "Tecnologías",
      href: "#technologies",
      icon: <Cpu className="size-4 cursor-pointer" color="black"/>
    },
    {
      label: "Proyectos",
      href: "#projects",
      icon: <FolderRoot className="size-4 cursor-pointer" color="black"/>
    }
  ]

  return (
    <header className="flex justify-center items-center w-full p-4">
      <NavigationMenu className="max-w-80 border p-3 rounded-full h-14">
        <NavigationMenuList className="flex justify-between items-center gap-4 h-8">
          <Separator orientation="vertical" />
          {
            menuOptions.map( option => (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Tooltip>
                      <TooltipTrigger>
                        <a href={option.href} className={navigationMenuTriggerStyle() + "p-2 hover:rounded-full"}>
                          { option.icon}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{ option.label }</p>
                      </TooltipContent>
                    </Tooltip>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))
          }
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
