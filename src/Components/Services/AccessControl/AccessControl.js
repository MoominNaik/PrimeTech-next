'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bannerImg from '../../Assets/Prime Tech - Blank Flyers_page-0009.jpg';
import WhyChooseAccessControl from './WhyChooseAccessControl';

const AccessControl = () => {
  return (
    <main className="bg-white text-gray-700 leading-relaxed min-h-screen font-oswald">
      {/* Banner Section */}
      <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
        <Image
          src={bannerImg}
          alt="Access Control Banner"
          fill
          className="object-cover object-top brightness-[0.5] z-0"
          priority
        />

        <div className="mt-12 md:mt-44 absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl mb-4 font-bebas tracking-[0.5px] font-bold">
            Protect Your Business & Home with Advanced Access Control Solutions
          </h1>

          <p className="text-md md:text-xl mb-5 w-full max-w-7xl mx-auto font-oswald font-light tracking-[1px]">
            Our reliable access control systems provide advanced security for both commercial and residential spaces, managing entry points and ensuring authorized access. With features like keyless entry, real-time monitoring, and remote access via mobile apps, you can control who enters your property from anywhere.
          </p>

          <Link
            href="/ask"
            className=" font-bold inline-block mt-6 md:mt-16 bg-black text-white no-underline px-10 py-[18px] text-[22px] cursor-pointer font-bebas tracking-[0.5px] transition-[color,transform,background-color] duration-300 ease-in-out hover:text-[#ff3333] hover:scale-105"
          >
            Request Consultation
          </Link>
        </div>
      </section>

      {/* Subheading */}
      <section className="text-center mt-20 mb-10">
        <h2 className="font-bebas tracking-[0.8px] text-3xl text-black">
          Why Choose Our Access Control Services?
        </h2>
      </section>

      {/* Feature Section */}
      <section>
        <WhyChooseAccessControl />
      </section>
    </main>
  );
};

export default AccessControl;