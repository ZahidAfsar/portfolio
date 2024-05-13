"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
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

  const router = useRouter()

  return (
    <div className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-[#025A4E] ${className}`}>
      <Menu setActive={setActive}>
        <a href="#about">
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        </a>
        <a href="#skills">
        <MenuItem setActive={setActive} active={active} item="Skills"></MenuItem>
        </a>
        <a href="#projects">
        <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
        </a>
        <a href="#contact">
        <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
        </a>
      </Menu>
    </div>
  );
}