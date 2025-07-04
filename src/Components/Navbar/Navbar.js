'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../Components/Assets/logo.png"; // Ensure alias setup and file is in /src/Assets



const ChevronDownIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
    stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const Navbar = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [line, setLine] = useState("Services");
  const pathname = usePathname();

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const hrBaseClasses = "absolute bottom-[-5px] left-0 w-full h-[3px] rounded-lg bg-[#05243d] border-none";
  const clickableItemWrapperClasses = "cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1";
  const linkBaseClasses = "no-underline text-white text-xl sm:text-2xl font-normal transition-colors duration-300 ease-in-out";

  return (
    <div className="relative">
      <nav className="
        relative
        flex items-start justify-between
        bg-black
        px-4 pt-4 sm:px-6 lg:px-16
        h-16
        font-bebas
        tracking-[0.5px]
      ">
        {/* Left (Services) */}
        <div className={`flex-1 text-left ${clickableItemWrapperClasses} pt-1 sm:pt-0`}>
          <div className="inline-block relative" onClick={() => { setLine("Services"); setIsFeaturesOpen(false); }}>
            <Link href="/home" className={linkBaseClasses}>
              SERVICES
            </Link>
            {line === "Services" && <hr className={hrBaseClasses} />}
          </div>
        </div>

        {/* Center (Logo + Toggle) */}
        <div className="flex flex-col items-center flex-shrink-0 px-2">
          <Link href="/" onClick={() => { setLine("NavbarLogo"); setIsFeaturesOpen(false); }}>
            <Image
              src={logo}
              alt="Logo"
              className="h-6 sm:h-[30px] w-auto cursor-pointer"
              priority
            />
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={toggleFeatures}
            className="text-[#b30000] md:hidden focus:outline-none p-1 mt-1"
            aria-label="Toggle features menu"
            aria-expanded={isFeaturesOpen}
          >
            <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>

        {/* Right (Ask) */}
        <div className={`flex-1 text-right ${clickableItemWrapperClasses} pt-1 sm:pt-0`}>
          <div className="inline-block relative" onClick={() => { setLine("ask"); setIsFeaturesOpen(false); }}>
            <Link href="/ask" className={linkBaseClasses}>
              Ask
            </Link>
            {line === "ask" && <hr className={hrBaseClasses} />}
          </div>
        </div>
      </nav>

      
    </div>
  );
};

export default Navbar;