
import Image from "next/image";
import { BackgroundGradientAnimation } from "./Components/BackgroundGradientAnimation";
import { BentoGridDemo } from "./Components/BentoGridDemo";
import { NavbarDemo } from "./Components/NavbarDemo";
import { TypewriterEffectSmoothDemo } from "./Components/TypewriterEffectSmooth";
import SkillsComponent from "./Components/SkillsComponent";
import { ThreeDCardDemo } from "./Components/ThreeDCardDemo";
import FooterComponent from "./Components/FooterComponent";
import React from "react";

export default function Home() {
  

  return (
    <div className="h-screen">
      <BackgroundGradientAnimation>
        <NavbarDemo />
        <div className="flex justify-center pt-24">
          <h1 className="text-center text-[#025A4E] font-bold fontlife sm:text-[120px] text-[60px]">Hi. I am Zahid.</h1>
        </div>
        <div className="flex justify-center pt-2">
          <h1 className="text-center text-[#025A4E] font-bold fontlife md:text-[120px] sm:text-[100px] text-[60px]">Web Developer.</h1>
        </div>
        <div>
          <TypewriterEffectSmoothDemo/>
        </div>
        <div className="pt-8">
          <hr className="flex mx-auto w-96 bg-white rounded-lg h-1 justify-center text-center" />
          <h1 id="about" className="text-center pt-12 fontlife font-bold text-4xl text-[#025A4E]">About</h1>
        </div>
        <div className="text-center text-xl text-[#025A4E] p-12 justify-center" >
          <p>As a Full Stack Developer hailing from Stockton, California, I bring a dynamic blend of enthusiasm and expertise to the realm of web development. My journey began with a comprehensive training program at CodeStack Academy, where I honed my skills in HTML, CSS, JavaScript, and React. Through hands-on projects and real-world challenges, I gained proficiency in crafting captivating user interfaces and interactive experiences. </p>
        </div>
        <div className="pt-8">
          <hr className="flex mx-auto w-96 bg-white rounded-lg h-1 justify-center text-center" />
          <h1 id="skills" className="text-center pt-12 fontlife font-bold text-4xl text-[#025A4E]">Skills</h1>
        </div>
        <div className="pt-8 pb-8">
          <SkillsComponent/>
        </div>
        <div className="pt-8">
          <hr className="flex mx-auto w-96 bg-white rounded-lg h-1 justify-center text-center" />
          <h1 id="projects" className="text-center pt-12 fontlife font-bold text-4xl text-[#025A4E]">Projects</h1>
        </div>
        <div className="">
        <ThreeDCardDemo/>
        </div>
        <div className="pt-8">
          <hr className="flex mx-auto w-96 bg-white rounded-lg h-1 justify-center text-center" />
          <h1 id="contact" className="text-center pt-12 fontlife font-bold text-4xl text-[#025A4E]">Contact</h1>
        </div>
        <div className="py-8" >
          <FooterComponent/>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
