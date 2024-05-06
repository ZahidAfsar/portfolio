"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../Components/navbar-menu";
import { cn } from "../utils/cn";
import { useRouter } from 'next/navigation';


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const router = useRouter()

  return (
    <div className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-[#025A4E] ${className}`}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About" onClick={() => handleLinkClick("about")} ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills" onClick={() => handleLinkClick("skills")}></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects" onClick={() => handleLinkClick("projects")}></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact" onClick={() => handleLinkClick("contact")} ></MenuItem>
      </Menu>
    </div>
  );
}