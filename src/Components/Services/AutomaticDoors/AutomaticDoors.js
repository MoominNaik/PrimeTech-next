"use client";

import Image from "next/image";
import Link from "next/link";
import automaticDoors from "../../Assets/Prime Tech - Blank Flyers_page-0004.jpg";
import WhyChooseDoors from "./WhyChooseDoors";

const AutomaticDoors = () => {
  return (
    <div className="bg-white text-gray-700 leading-relaxed min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-[92vh] overflow-hidden flex items-center justify-center">
        <Image
          src={automaticDoors}
          alt="Automatic Doors Banner"
          fill
          className="object-cover object-top brightness-[0.7]"
          priority
        />

        {/* Banner Overlay */}
        <div className="mt-12 md:mt-44 absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl mb-4 font-bebas tracking-[0.5px] font-bold">
            Transform Your Space with Modern Automatic Doors
          </h1>

          <p className="text-md md:text-xl mb-5 w-full max-w-[1280px] mx-auto font-oswald font-light tracking-[1px] mt-10 md:mt-0">
            Our state-of-the-art automatic doors offer seamless entry, enhanced accessibility, and modern convenience. With features like hands-free operation, ADA compliance, and energy efficiency, our systems provide a perfect blend of functionality and aesthetics. Whether for commercial or residential use, our doors improve safety, accessibility, and overall user experience while maintaining a sleek, contemporary design.
          </p>

          <Link
            href="/ask"
            className=" font-bold inline-block mt-6 md:mt-16 bg-black text-white no-underline px-10 py-[18px] text-[22px] font-bebas tracking-[0.5px] transition-[color,transform,background-color] duration-300 ease-in-out hover:text-[#ff3333] hover:scale-105"
          >
            Request Consultation
          </Link>
        </div>
      </div>

      {/* Section Title */}
      <div className="w-full text-center">
        <h1 className="font-bebas tracking-[0.8px] text-3xl text-black mt-20 mb-12 md:mt-[280px] md:mb-[50px]">
          Why Choose Our Automatic Doors?
        </h1>
      </div>

      {/* Why Choose Section */}
      <WhyChooseDoors />
    </div>
  );
};

export default AutomaticDoors;