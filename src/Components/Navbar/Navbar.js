'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../Components/Assets/logo.png";

const Navbar = () => {
  const [line, setLine] = useState("Services");

  const hrBaseClasses = "absolute bottom-[-5px] left-0 w-full h-[3px] rounded-lg bg-[#05243d] border-none";
  const clickableItemWrapperClasses = "cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1";
  const linkBaseClasses = "no-underline text-white text-sm xs:text-base sm:text-xl font-normal transition-colors duration-300 ease-in-out";

  return (
    <div className="relative z-50">
      <nav className="
        relative
        bg-black
        h-16 sm:h-20
        px-4 sm:px-6 lg:px-16
        flex items-center justify-between
        font-bebas tracking-[0.5px]
      ">
        {/* Left (Services) */}
        <div className={`w-1/3 flex justify-start ${clickableItemWrapperClasses}`}>
          <div className="relative" onClick={() => setLine("Services")}>
            <Link href="/home" className={linkBaseClasses}>
              SERVICES
            </Link>
            {line === "Services" && <hr className={hrBaseClasses} />}
          </div>
        </div>

        {/* Center (Logo) */}
        <div className="w-1/3 flex justify-center">
          <Link href="/" onClick={() => setLine("NavbarLogo")}>
            <Image
              src={logo}
              alt="Logo"
              className="h-6 sm:h-[30px] w-auto cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Right (Ask) */}
        <div className={`w-1/3 flex justify-end ${clickableItemWrapperClasses}`}>
          <div className="relative" onClick={() => setLine("ask")}>
            <Link href="/ask" className={linkBaseClasses}>
              ASK
            </Link>
            {line === "ask" && <hr className={hrBaseClasses} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;