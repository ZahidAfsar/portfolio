import Image from "next/image";
import Logo from '../../public/images/Zahid-4.png'
import { BackgroundGradientAnimation } from "./Components/BackgroundGradientAnimation";
import { BentoGridDemo } from "./Components/BentoGridDemo";
import { NavbarDemo } from "./Components/NavbarDemo";
import { StickyScroll } from "./Components/StickyScroll";
import { StickyScrollRevealDemo } from "./Components/StickyScrollRevealDemo";
import { HeroHighlightDemo } from "./Components/HeroHighlighDemo";
import { TypewriterEffectSmooth } from "./Components/TypewriterEffect";
import { TypewriterEffectSmoothDemo } from "./Components/TypewriterEffectSmooth";

export default function Home() {
  return (
    <div className="h-screen" >
    <BackgroundGradientAnimation>
      <NavbarDemo/>
      <div className="flex justify-center pt-24" >
      <h1 className="text-center text-[#025A4E] font-bold text-[120px]" >Hi. I am Zahid.</h1>
      </div>
      <div className="flex justify-center pt-2" >
      <h1  className="text-center text-[#025A4E] font-bold text-[120px]" >Web Developer.</h1>
      </div>
      <div>
       <TypewriterEffectSmoothDemo/>
      </div>
      <div>
        <StickyScrollRevealDemo/>
      </div>
      <div className="p-16">
      <BentoGridDemo/>
      </div>

    </BackgroundGradientAnimation>
    {/* <img src={Logo.src} alt="Logo for Portfolio" /> */}

    </div>
  );
}
