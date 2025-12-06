import React from "react";
import { Button } from "./ui/button";
import SearchBar from "./SearchBar";
import logo from "@/assets/logo.png";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "@/assets/profile.png";
import { useSelector } from "react-redux";

const TopBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="flex w-full fixed z-40 px-5  justify-between border-b items-center h-16 bg-white">
      <div>
        <img src={logo} alt="logo" className="h-12" />
      </div>
      <div className="w-[500px]">
        <SearchBar />
      </div>
      <div>
        {!user.isLoggedIn && (
          <Button asChild className="rounded-full">
            <Link to="/login">
              <FiLogIn />
              Login
            </Link>
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="p-0 rounded-full">
              <Avatar>
                <AvatarImage
                  src={user.userInfo.profileImage || profile}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{user.userInfo.fullName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
