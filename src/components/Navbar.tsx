import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { BriefcaseBusiness, Cpu, FolderRoot, GraduationCap, User } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import type { MenuOption } from "@/interfaces"

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
      label: "Educación",
      href: "#education",
      icon: <GraduationCap className="size-4 cursor-pointer" color="black"/>
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
    <header className="flex justify-center items-center w-full p-4 h-20 fixed top-0 z-50 bg-white">
      <NavigationMenu className="max-w-96 border p-3 rounded-full h-14 gap-2">
        <NavigationMenuList>
          <NavigationMenuItem>
              <a href="./">
                <img src="/black_logo.png" alt="logo" className="h-8 filter saturate-10" width={80} height={50}/>              
              </a>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="flex justify-between items-center gap-4 h-8">
          <Separator orientation="vertical" />
          {
            menuOptions.map( option => (
              <NavigationMenuItem key={option.label}>
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
