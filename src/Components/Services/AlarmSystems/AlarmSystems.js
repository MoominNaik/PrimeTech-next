"use client";

import Image from "next/image";
import Link from "next/link";
import alarmSystemsN from "../../Assets/alarmSystemsN.jpeg";
import WhyChoseAlarm from './WhyChoseAlarm';

const AlarmSystems = () => {
  return (
    <div className="bg-white text-gray-700 leading-relaxed min-h-screen">
      
      {/* Banner Section */}
      <div className="relative w-full h-[92vh] overflow-hidden flex items-center justify-center">
        <Image
          src={alarmSystemsN}
          alt="Alarm system installation banner showing house security in Jackson"
          fill
          className="object-cover object-top brightness-[0.7]"
          priority
        />

        <div className="mt-12 md:mt-44 absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl mb-4 font-bebas tracking-[0.5px] font-bold">
            Protect Your Business & Home with Advanced Alarm Systems
          </h1>
          <p className="text-md md:text-xl mb-5 w-full max-w-[1280px] mx-auto font-oswald font-light tracking-[1px] mt-10 md:mt-0">
            Our reliable alarm systems provide advanced security for both commercial and residential spaces, detecting unauthorized entry, fire hazards, and other emergencies. With features like motion sensors, real-time monitoring, and remote access via mobile apps, you can keep an eye on your property from anywhere...
          </p>
          <Link
            href="/ask"
            className="inline-block mt-6 md:mt-16 bg-black text-white px-10 py-[18px] text-[22px] font-bebas tracking-[0.5px] transition-[color,transform,background-color] duration-300 ease-in-out hover:text-[#ff3333] hover:scale-105 font-bold"
          >
            Request Consultation
          </Link>
        </div>
      </div>

      {/* Opener Heading */}
      <div className="opener-h1 w-full text-center">
        <h2 className="font-bebas tracking-[0.8px] text-3xl text-black mt-20 mb-12 md:mt-[280px] md:mb-[50px]">
          Why Choose Our Alarm Systems?
        </h2>
      </div>

      {/* WhyChoseAlarm Section */}
      <WhyChoseAlarm />

      {/* SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Advanced Alarm Systems Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "PrimeTech",
              url: "https://primetechms.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jackson",
                addressRegion: "MS",
                addressCountry: "US"
              }
            },
            areaServed: {
              "@type": "Place",
              name: "Jackson, MS and surrounding cities"
            },
            description: "Installation of smart alarm systems with 24/7 monitoring, smart alerts, and mobile control for homes and businesses.",
            serviceType: "Alarm System Installation"
          }),
        }}
      />
    </div>
  );
};

export default AlarmSystems;