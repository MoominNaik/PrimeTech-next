"use client";

import React from "react";

const signageFeatures = [
  {
    icon: "🔒",
    title: "Secure Display Systems",
    description:
      "Protect your content with encrypted connections and restricted access.",
  },
  {
    icon: "🌐",
    title: "Remote Management",
    description:
      "Control and update content securely from any location in real-time.",
  },
  {
    icon: "📊",
    title: "Data Encryption",
    description:
      "Prevent unauthorized alterations with end-to-end encryption.",
  },
  {
    icon: "🔍",
    title: "Real-Time Monitoring",
    description:
      "Track display activity and detect suspicious behavior instantly.",
  },
];

const WhyChooseDigitalSignage = () => {
  return (
    <section
      className="
        flex flex-col items-center justify-center
        bg-white text-gray-700
        px-8 lg:px-16 py-24 lg:py-32
        mt-10 md:mt-32 pb-5 md:pb-32
        rounded-2xl
        transition-transform duration-300 ease-in-out
        hover:-translate-y-2
        w-full max-w-screen-xl mx-auto
      "
      aria-labelledby="signage-heading"
    >
      {/* Heading Section */}
      <div className="text-center mb-12 lg:mb-16">
        <h2
          id="signage-heading"
          className="
            font-bebas
            text-4xl lg:text-5xl
            text-[#b30000]
            uppercase
            tracking-[1px]
            font-bold
          "
        >
          DIGITAL SIGNAGE SOLUTIONS IN JACKSON, MISSISSIPPI
        </h2>
        <p
          className="
            font-oswald
            text-lg lg:text-xl
            text-black
            max-w-3xl lg:max-w-4xl
            leading-relaxed
            mx-auto mt-4
          "
        >
          Enhance your business with tamper-proof, remotely managed, and encrypted digital displays.
        </p>
      </div>

      {/* Features */}
      <div
        className="
          grid grid-cols-1 lg:grid-cols-2
          gap-8 lg:gap-10
          w-full max-w-4xl lg:max-w-6xl
        "
        role="list"
      >
        {signageFeatures.map((item, index) => (
          <div
            key={index}
            role="listitem"
            className="
              group
              relative overflow-hidden
              text-center
              bg-gradient-to-r from-[#341414] via-[#800D0D] to-[#341414]
              p-10 lg:p-12
              rounded-2xl
              border border-gray-200
              shadow-xl hover:shadow-2xl
              transition-transform duration-300 ease-in-out
              hover:-translate-y-3
              text-white
              cursor-pointer
            "
          >
            <div
              aria-hidden="true"
              className="
                mb-5 text-6xl text-[#b30000]
                transition-transform duration-300 ease-in-out
                group-hover:scale-125 group-hover:rotate-6 group-hover:text-white
              "
            >
              {item.icon}
            </div>

            <h3 className="font-oswald text-2xl lg:text-3xl mb-2.5 text-white">
              {item.title}
            </h3>

            <p className="font-oswald text-base lg:text-lg text-white leading-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseDigitalSignage;