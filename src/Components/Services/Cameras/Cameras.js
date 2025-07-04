"use client";

import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../Assets/Prime Tech - Blank Flyers_page-0008.jpg";
import WhyChooseCameras from "./WhyChooseCameras";

const Cameras = () => {
  return (
    <main className="bg-white text-gray-700 leading-relaxed min-h-screen font-oswald">
      
      {/* Hero Section */}
      <section className="relative w-full h-[92vh] overflow-hidden flex items-center justify-center">
        <Image
          src={bannerImg}
          alt="Surveillance camera system for business and home"
          fill
          className="object-cover object-top brightness-[0.7]"
          priority
        />

        <div className="absolute inset-0 mt-12 md:mt-44 flex flex-col items-center justify-center text-center text-white z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl mb-4 font-bebas tracking-[0.5px] font-bold">
            Secure Your Business & Home with Advanced Surveillance Cameras
          </h1>

          <p className="text-md md:text-xl mb-5 w-full max-w-7xl mx-auto font-light tracking-[1px]">
            PrimeTech provides professional-grade surveillance camera systems in Jackson, MS and surrounding areas. Monitor your home or business with HD video, night vision, and remote access — all tailored to your security needs.
          </p>

          <Link
            href="/ask"
            className="inline-block mt-6 md:mt-16 bg-black text-white px-10 py-[18px] text-[22px] font-bebas tracking-[0.5px] transition-[color,transform,background-color] duration-300 ease-in-out hover:text-[#ff3333] hover:scale-105 font-bold"
          >
            Request Consultation
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full text-center mt-20 md:mt-[280px] mb-12 md:mb-[50px]">
        <h2 className="font-bebas tracking-[0.8px] text-3xl text-black mb-10">
          Why Choose PrimeTech Camera Systems?
        </h2>
        <WhyChooseCameras />
      </section>
    </main>
  );
};

export default Cameras;