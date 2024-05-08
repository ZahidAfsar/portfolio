'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../Components/3d-card";
import Link from "next/link";
import weather from '../../../public/images/weather.png'
import poke from '../../../public/images/poke.png'
import strike from '../../../public/images/strike.png'

export function ThreeDCardDemo() {
  return (
    <>
    <div className="flex justify-center flex-col xl:flex-row ">
    <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-1">
      <CardContainer className="inter-var sm:mr-4">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold fontlife text-[#025A4E]"
>
            Weather App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            NextJS | Typescript | Tailwind | Postman | Vercel
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={weather}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://weather-pi-gray.vercel.app/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/ZahidAfsar/weather"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Repository
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var sm:mr-4 mt-4 sm:mt-0">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold fontlife text-[#025A4E]"
>
            PokeDex
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            REACT | Typescript | Tailwind | Postman | Vercel
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={poke}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://pokemonapireact-flame.vercel.app/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/ZahidAfsar/pokemonapireact"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Repository
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
     
    </div>
    </div>
    <div>
    <CardContainer className="inter-var sm:mt-0">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold fontlife text-[#025A4E]"
          >
             Strike Showdown
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            NextJS | Typescript | C# | SQL | Azure | Vercel
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={strike}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://full-stack-strike-showdown.vercel.app/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/ZahidAfsar/strikeshowdown-backend"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Repository
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
    </>
  );
}
