"use client";

import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../Assets/Prime Tech - Blank Flyers_page-0003.jpg";
import WhyChooseDigitalSignage from "./WhyChooseDigitalSignage";

const DigitalSignage = () => {
  return (
    <div className="bg-white text-gray-700 leading-relaxed min-h-screen">

      {/* Banner Section */}
      <div className="relative w-full h-[92vh] overflow-hidden flex items-center justify-center">
        <Image
          src={bannerImg}
          alt="Commercial Digital Signage Installer in Mississippi"
          fill
          className="object-cover object-top brightness-[0.5]"
          priority
        />

        <div className="mt-12 md:mt-44 absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl mb-4 font-bebas tracking-[0.5px] font-bold">
            Digital Signage Installation Services in Mississippi
          </h1>

          <p className="text-md md:text-xl mb-5 w-full max-w-7xl mx-auto font-oswald font-light tracking-[1px]">
            PrimeTech offers professional <strong>digital signage installation</strong> services tailored for retail stores, restaurants, corporate offices, and public venues. Our <strong>LED video walls</strong>, interactive displays, and cloud-controlled signage systems deliver seamless communication and visual impact.
          </p>

          <Link
            href="/ask"
            className=" font-bold inline-block mt-6 md:mt-16 bg-black text-white px-10 py-[18px] text-[22px] font-bebas tracking-[0.5px] transition-[color,transform,background-color] duration-300 ease-in-out hover:text-[#ff3333] hover:scale-105"
          >
            Request Consultation
          </Link>
        </div>
      </div>

      

      {/* Why Choose Section */}
      <WhyChooseDigitalSignage />

      
    </div>
  );
};

export default DigitalSignage;