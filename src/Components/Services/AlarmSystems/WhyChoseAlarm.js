"use client";

import React from "react";

const alarmFeatures = [
  {
    icon: "🛡️",
    title: "24/7 Protection",
    description:
      "Continuous monitoring and instant alerts for any security breaches.",
  },
  {
    icon: "🚨",
    title: "Smart Alerts",
    description:
      "Real-time notifications to your mobile device for immediate action.",
  },
  {
    icon: "🔒",
    title: "Advanced Security",
    description:
      "State-of-the-art technology to protect your property and valuables.",
  },
  {
    icon: "🏠",
    title: "Whole Home Coverage",
    description:
      "Comprehensive protection for every entry point and vulnerable area.",
  },
  {
    icon: "📱",
    title: "Remote Control",
    description:
      "Manage your security system from anywhere with our mobile app.",
  },
];

const WhyChoseAlarm = () => {
  return (
    <section
      className="
        flex flex-col md:flex-row items-stretch
        mx-auto w-full mt-16 pb-40 max-w-screen-xl
      "
      aria-labelledby="alarm-heading"
    >
      {/* Left Section - Heading */}
      <div
        className="
          w-full md:w-[40%] bg-[#8B0000] text-gray-100
          flex items-center justify-center text-center
          font-bebas tracking-[0.8px]
          p-10 sm:p-16 border-b-2 md:border-b-0 md:border-r-2 border-gray-300
          shadow-lg transition-transform duration-500 ease-in-out
          hover:scale-105 hover:shadow-xl
        "
      >
        <h2
          id="alarm-heading"
          className="text-3xl sm:text-4xl font-bold leading-normal uppercase"
        >
          Alarm Systems in Jackson, Mississippi <br /> for 24/7 Protection
        </h2>
      </div>

      {/* Right Section - Features */}
      <div
        className="w-full md:w-[60%] bg-black text-white p-8 sm:p-10 shadow-lg"
        role="list"
      >
        <div className="flex flex-col gap-5 font-oswald">
          {alarmFeatures.map((item, index) => (
            <div
              key={index}
              role="listitem"
              className="
                group flex items-start gap-4
                text-md md:text-lg text-white
                transition-transform duration-300 ease-in-out
                hover:translate-x-2
              "
            >
              <span
                aria-hidden="true"
                className="
                  text-2xl text-[#007bff]
                  transition-transform duration-300 ease-in-out
                  group-hover:rotate-12 group-hover:scale-125
                "
              >
                {item.icon}
              </span>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoseAlarm;