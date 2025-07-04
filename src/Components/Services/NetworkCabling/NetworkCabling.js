'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import bannerImg from '../../Assets/Prime Tech - Blank Flyers_page-0005.jpg';
import WhyChooseNetworkCabling from './WhyChoseNetworkCabling';

const NetworkCabling = () => {
  return (
    <div className="bg-white text-gray-700 leading-relaxed min-h-screen">

      {/* JSON-LD Structured Data */}
      <Script id="network-cabling-ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Network Cabling",
          "provider": {
            "@type": "LocalBusiness",
            "name": "PrimeTech",
            "url": "https://primetechms.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jackson",
              "addressRegion": "MS",
              "addressCountry": "US"
            },
            "telephone": "+1-XXX-XXX-XXXX"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Jackson, MS and surrounding areas"
          },
          "description": "Structured network cabling solutions for commercial and residential properties, including high-speed data transfer and reliable IT infrastructure.",
        })}
      </Script>

      {/* Banner Section */}
      <div className="relative w-full h-[92vh] overflow-hidden flex items-center justify-center">
        <Image
          src={bannerImg}
          alt="Technician performing network cabling setup"
          fill
          className="object-cover object-top brightness-[0.5] z-0"
          priority
        />
        <div className="mt-12 md:mt-44 absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl mb-4 font-bebas tracking-[0.5px] font-bold">
            Enhance Your Connectivity with Professional Network Cabling 
          </h1>
          <p className="text-md md:text-xl mb-5 w-full max-w-7xl mx-auto font-oswald font-light tracking-[1px]">
            Our expert network cabling services ensure seamless connectivity for both commercial and residential environments. We specialize in structured cabling systems that support high-speed data transfer, reliable internet access, and efficient communication. With our tailored solutions, you can optimize your network infrastructure, reduce downtime, and enhance overall performance. Whether you are upgrading your existing setup or installing a new system, our team is dedicated to providing quality workmanship and exceptional service.
          </p>
          <Link
            href="/ask"
            className="inline-block mt-6 md:mt-16 bg-black text-white no-underline px-10 py-[18px] text-[22px] cursor-pointer font-bebas tracking-[0.5px] transition-[color,transform,background-color] duration-300 ease-in-out hover:text-[#ff3333] hover:scale-105 font-bold"
          >
            Request Consultation
          </Link>
        </div>
      </div>

      {/* Opener H1 */}
      <div className="opener-h1 w-full text-center">
        <h2 className="font-bebas tracking-[0.8px] text-3xl text-black mt-12 mb-12 md:mt-[280px] md:mb-[50px]">
          Why Choose Our Network Cabling Services?
        </h2>
      </div>

      {/* Features Section */}
      <WhyChooseNetworkCabling />
    </div>
  );
};

export default NetworkCabling;