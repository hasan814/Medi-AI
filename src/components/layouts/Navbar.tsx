"use client";

import { ModeToggle } from "../modules/ModeToggle";
import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import MobileSidebar from "@/components/modules/MobileSidebar";

const Navbar = () => {
  return (
    <div className="bg-secondary fixed h-16 w-full flex items-center justify-between z-50 py-2 px-4 border-primary/10">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href={"/"}>
          <h1 className="hidden md:block text-xl md:text-3xl font-bold text-primary">
            Hospivital-AI
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant={"premium"} size={"sm"}>
          Upgrade <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
