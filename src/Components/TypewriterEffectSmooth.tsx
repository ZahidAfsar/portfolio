"use client";
import { TypewriterEffectSmooth } from "./TypewriterEffect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Im",
    },
    {
      text: "passionate about",
    },
    {
      text: "creating apps",
    },
    {
      text: "that can help",
    },
    {
      text: "others.",
      className: "text-[#025A4E]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} />    
    </div>
  );
}
