'use client';
import React from "react";
// import "./ContactInfo.css"; // Make sure to create this CSS file

const ContactInfo = () => {
  return (
    <div className="
      flex flex-col sm:flex-row       
      justify-center                  
      items-center                    
      gap-6 sm:gap-10                 
      p-6 sm:p-10 md:p-[45px]         # Responsive padding: smaller on mobile, original 45px on md+
      mb-6 sm:mb-64 md:mb-96 lg:mb-[380px] # Responsive margin-bottom: drastically reduced on mobile, scales up
      bg-gradient-to-r from-black via-[#750000] to-black # Gradient background (rgb(117,0,0) -> #750000)
      shadow-[0_2px_10px_rgba(0,0,0,0.2)] # Applying exact box-shadow using arbitrary value
      w-full                          # Ensure it takes full width
    ">
      {/* .contact-item 1 equivalent */}
      <div className="
        flex items-center             # display: flex; align-items: center;
        gap-2.5                       # gap: 10px (gap-2.5 = 0.625rem = 10px)
        bg-black                      # background: black;
        text-white                    # color: white;
        text-base sm:text-lg          # font-size: 16px mobile, 18px sm+ (text-lg = 1.125rem = 18px)
        px-5 py-4                     # padding: 15px 20px (px-5=20px, py-4=16px ~ 15px)
        transition-[transform,background] duration-300 ease-in-out # transition properties
        w-full justify-center sm:w-auto sm:justify-start # Full width & centered when stacked, auto width otherwise
      ">
        {/* .contact-icon equivalent */}
        <span className="
          text-xl sm:text-[22px]        # font-size: 20px mobile, 22px sm+ (arbitrary value)
        ">
          📞
        </span>
        {/* .contact-text equivalent (inherits styles from parent) */}
        <span className="contact-text">
          601.521.3772
        </span>
      </div>

      {/* .contact-item 2 equivalent */}
      <div className="
        flex items-center
        gap-2.5
        bg-black
        text-white
        text-base sm:text-lg
        px-5 py-4
        transition-[transform,background] duration-300 ease-in-out
        w-full justify-center sm:w-auto sm:justify-start
      ">
        {/* .contact-icon equivalent */}
        <span className="
          text-xl sm:text-[22px]
        ">
          ✉️
        </span>
        {/* .contact-text equivalent */}
        <span className="contact-text">
          rflowers@primetechms.com
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;