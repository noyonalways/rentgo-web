import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface IProps {
  align?: "start" | "end" | "center";
  size?: string;
}

const ProfileAvatar: React.FC<IProps> = ({ align, size }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar
          className={`bg-background ring-2 ring-primary ${
            size ? size : "size-12"
          }`}
        >
          <AvatarImage
            src="https://i.ibb.co.com/c64q254/noyon-logo-dark.png"
            alt="Customer avatar"
            className=" w-full "
          />
          <AvatarFallback className="bg-muted dark:bg-primary/15">
            U
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align={align}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="w-full" to="/me">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button className="w-full" variant={"destructive"}>
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
