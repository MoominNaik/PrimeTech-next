'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FeaturesNavbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/AlarmSystems", label: "Alarm Systems" },
    { href: "/NetworkCabling", label: "Network Cabling" },
    { href: "/AccessControl", label: "Access Control" },
    { href: "/Cameras", label: "Cameras" },
    { href: "/AutomaticDoors", label: "Automatic Doors" },
    { href: "/DigitalSignage", label: "Digital Signage" },
  ];

  return (
    <nav className="
      w-full
      bg-black
      pb-5 pt-3
      flex justify-center
      shadow-lg
      z-[999]
      font-oswald
    ">
      <div className="flex items-center justify-center space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 transition-colors duration-200 ${
              pathname === link.href 
                ? 'text-red-600 hover:text-red-600' 
                : 'text-white hover:text-red-600'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FeaturesNavbar;