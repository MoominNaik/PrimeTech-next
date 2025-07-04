'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const links = [
  { href: '/AlarmSystems',    label: 'Alarm Systems' },
  { href: '/NetworkCabling', label: 'Network Cabling' },
  { href: '/AccessControl',  label: 'Access Control' },
  { href: '/Cameras',        label: 'Cameras' },
  { href: '/AutomaticDoors', label: 'Automatic Doors' },
  { href: '/DigitalSignage', label: 'Digital Signage' },
];

const FeaturesNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white font-oswald shadow-md">
      {/* --- Mobile header & toggle --- */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden w-full flex items-center justify-center gap-2 px-4 py-3 text-lg tracking-wide focus:outline-none"
        aria-expanded={open}
      >
        <ChevronDown
          className={`h-5 w-5 text-red-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* --- Mobile dropdown list --- */}
      {open && (
        <div className="sm:hidden flex flex-col items-center gap-3 px-4 pb-4 text-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="hover:text-red-600 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      {/* --- Desktop / tablet bar --- */}
      <div className="hidden sm:flex items-center justify-center gap-8 px-6 py-3 text-base">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-red-600 transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FeaturesNavbar;