import React from "react";

const WhyChooseNetworkCabling = () => {
  const features = [
    {
      icon: "🔌",
      title: "Structured Cabling",
      description: "Organized and scalable systems for seamless network infrastructure.",
    },
    {
      icon: "🚀",
      title: "High-Speed Performance",
      description: "Reliable and fast data transmission with minimal latency.",
    },
    {
      icon: "🏢",
      title: "Commercial & Residential",
      description: "Customized solutions for homes, offices, warehouses, and campuses.",
    },
    {
      icon: "🛠️",
      title: "Professional Installation",
      description: "Clean, efficient wiring done by certified technicians using best practices.",
    },
    {
      icon: "🧠",
      title: "Future-Proof Solutions",
      description: "Systems built for expansion, supporting new technologies and upgrades.",
    },
  ];

  return (
    <section
      className="
        flex flex-col md:flex-row
        items-stretch
        mx-auto pb-5 md:pb-32 mt-10
        w-full max-w-screen-xl
        transition-opacity duration-700 ease-in-out
      "
      aria-labelledby="network-cabling-heading"
    >
      {/* Left Side Title */}
      <div
        className="
          w-full md:w-[40%]
          bg-[#8B0000] text-gray-100
          flex items-center justify-center text-center
          font-bebas tracking-[0.8px]
          p-10 sm:p-16
          border-b-2 md:border-b-0 md:border-r-2 border-gray-300
          shadow-lg
          transition-transform duration-500 ease-in-out
          hover:scale-105 hover:shadow-xl
        "
      >
        <h2
          id="network-cabling-heading"
          className="text-3xl sm:text-4xl font-bold leading-normal uppercase"
        >
          Network Cabling Services in Jackson, Mississippi
        </h2>
      </div>

      {/* Right Side Content */}
      <div
        className="
          w-full md:w-[60%]
          bg-black text-white
          p-8 sm:p-10 shadow-lg
        "
      >
        <div className="flex flex-col gap-5 font-oswald" role="list">
          {features.map((item, index) => (
            <div
              key={index}
              role="listitem"
              className="
                group flex items-start gap-4
                text-md md:text-lg
                text-white
                transform transition-transform duration-300 ease-in-out
                hover:translate-x-2
              "
            >
              <span
                className="
                  text-2xl text-[#007bff]
                  transition-transform duration-300 ease-in-out
                  group-hover:rotate-6 group-hover:scale-125
                "
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNetworkCabling;