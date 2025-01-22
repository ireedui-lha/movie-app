"use client";
import { Input } from "@/components/ui/input";

import { ChevronDown, Moon, Sun } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme } = useTheme();
  return (
    <div className="flex justify-between sticky top-0  w-[100vw] p-[16px] h-[59px]">
      <div className="flex gap-5">
        <img src="./film.png" alt="" />
        <h1 className="text-[#4338CA] font-bold text-[20px]">Movie Z</h1>
      </div>
      <Popover>
        <PopoverTrigger className="text-white">Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

      <div className="flex gap-5 ">
        <Input placeholder="Search" className="w-[379px]" />
      </div>
      <Button onClick={() => setTheme("dark")}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
