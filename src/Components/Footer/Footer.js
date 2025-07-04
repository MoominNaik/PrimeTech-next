'use client';

import React from "react";
import Image from "next/image";
import footerlogo from "../Assets/logo.png"; // Make sure path is correct

const Footer = () => {
  return (
    <footer className="
      bg-black
      text-white
      px-5 py-10
      mt-14
      text-center
      flex flex-col
      items-center
    ">
      {/* Logo */}
      <div className="footer-logo">
        <Image
          src={footerlogo}
          alt="PrimeTech Logo"
          className="
            w-full
            h-auto
            max-w-[240px] sm:max-w-[300px]
            mb-5
          "
          priority
        />
      </div>

      {/* Contact Info */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="footer-contact text-center mb-5">
          <div className="
            flex flex-col
            sm:flex-row sm:flex-wrap
            justify-center items-center
            gap-3 sm:gap-5
          ">
            <p>📞 601.521.3772</p>
            <p>
              🌐{" "}
              <a
                href="https://www.primetechms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-red-600"
              >
                www.primetechms.com
              </a>
            </p>
            <p>
              ✉️{" "}
              <a
                href="mailto:rflowers@primetechms.com"
                className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-red-600"
              >
                rflowers@primetechms.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-10 text-sm text-gray-400 w-full flex flex-col items-center">
        <div className="h-[1px] w-20 sm:w-64 bg-gray-600 mb-2.5"></div>
        <p className="pt-2.5">
          © {new Date().getFullYear()} PrimeTech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;