"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Z from "../../public/images/Z.png";

const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scroll, setscroll] = useState<boolean>(false);

  const openNav = () => {
    setIsOpen(!isOpen);
  };
  const NavScroll = () => {
    if (window.scrollY >= window.innerHeight - 30) {
      if (window.scrollY >= window.innerHeight * 6 - 700) {
        setscroll(false);
      } else {
        setscroll(true);
      }
    } else {
      setscroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavScroll);
  }, []);

  return (
    <div
      className={
        scroll ? "h-[75px] sticky top-0  z-50" : "h-[75px] sticky top-0  z-50"
      }
    >
      <div
        className={
          "h-full my-auto flex px-[35px] justify-between items-center text-black z-50"
        }
      >
        <div>
          <div>
            <a href="#">
              <Image
                className="cursor-pointer h-[96px] w-auto"
                src={Z}
                alt="Zahid logo"
              />
            </a>
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="focus:outline-none" onClick={openNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden lg:block">
          <div className="flex text-[18px] fontlife h-full">
            <a className="my-auto hover:text-[#025A4E]" href="#about">
              About Me
            </a>
            <a
              className="my-auto mx-[50px] hover:text-[#025A4E]"
              href="#skills"
            >
              Skills
            </a>
            <a className="my-auto hover:text-[#025A4E]" href="#projects">
              Projects
            </a>
            <div className="ms-[40px]">
              <button className="bg-black hover:bg-[#025A4E] text-white hover:text-grey px-[30px] py-2.5 rounded-[50px]">
                <a href="#contact">{"Connect With Me"}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isOpen ? (
          <div className="lg:hidden bgColor w-full right-0 pt-2 pb-10 px-[35px] absolute z-50">
            <div className="flex flex-col text-end gap-y-[20px] text-black text-[20px] fontlife">
              <a
                className=" my-auto hover:bg-[#025A4E] hover:text-[#262626]"
                href="#about"
              >
                About Me
              </a>
              <a
                className=" my-auto hover:bg-[#025A4E] hover:text-[#262626]"
                href="#skills"
              >
                Skills
              </a>
              <a
                className=" my-auto hover:bg-[#025A4E] hover:text-[#262626]"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="my-auto hover:bg-[#025A4E] rounded-lg hover:text-grey"
                href="#contact"
              >
                {"Connect With Me"}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBarComponent;
