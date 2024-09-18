import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { MonitorCog, Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2 py-3" size={"lg"}>
          <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="size-5 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="space-x-2"
          onClick={() => setTheme("light")}
        >
          <Sun className="size-4" /> <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="space-x-2"
          onClick={() => setTheme("dark")}
        >
          <Moon className="size-4" /> <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="space-x-2"
          onClick={() => setTheme("system")}
        >
          <MonitorCog className="size-4" /> <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
