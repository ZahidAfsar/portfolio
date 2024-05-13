"use client";
import React from "react";
import { StickyScroll } from "./StickyScroll";
import Image from "next/image";
import Csharp from '../../../public/images/c-sharp.png'
import javascript from '../../../public/images/javascript.svg'
import typescript from '../../../public/images/typescript.svg'
import html from '../../../public/images/html.svg'


const content = [
  {
    title: "C#",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-transparent bg-none flex items-center justify-center text-white">
        <Image src={Csharp.src} alt="c sharp"  width={300}
          height={300}
          className="h-full w-full object-fit" />
      </div>
    ),
  },
  {
    title: "JavaScript",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full bg-none flex items-center justify-center text-white">
        <Image
          src={javascript.src}
          width={300}
          height={300}
          className="h-full w-full object-fit"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "TypeScript",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-transparent flex items-center justify-center text-white">
        <Image
          src={typescript.src}
          width={400}
          height={400}
          className="h-full w-full object-fit"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "HTML/CSS",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-transparent flex items-center justify-center text-white">
        <Image
          src={html.src}
          width={300}
          height={300}
          className="h-full w-full object-fit"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
