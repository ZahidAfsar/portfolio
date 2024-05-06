"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../Components/navbar-menu";
import { cn } from "../utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-[#025A4E]", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          
        </MenuItem>
      </Menu>
    </div>
  );
}
