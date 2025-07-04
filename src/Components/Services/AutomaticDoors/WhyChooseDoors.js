import React from "react";

const WhyChooseDoors = () => {
  const listItems = [
    { icon: "🚪", text: "<strong>Seamless Entry</strong> – Hands-free access for everyone, enhancing convenience and hygiene." },
    { icon: "♿", text: "<strong>ADA Compliant</strong> – Meets accessibility standards for all users." },
    { icon: "💡", text: "<strong>Energy Efficient</strong> – Reduces energy loss and maintains climate control." },
    { icon: "🔒", text: "<strong>Secure & Reliable</strong> – Advanced technology for safe and consistent operation." },
    { icon: "🛠️", text: "<strong>Versatile Design</strong> – Compatible with various door types and styles." },
  ];

  return (
    <div className="
      flex flex-col md:flex-row
      items-stretch
      mx-auto mt-10 pb-5 md:pb-32
      w-full
    ">
      {/* Left Section */}
      <div className="
        w-full md:w-[40%]
        text-gray-100 bg-[#8B0000]
        flex items-center justify-center
        text-center font-bebas
        tracking-[0.8px]
        p-10 sm:p-16
        border-b-2 border-gray-300
        md:border-b-0 md:border-r-2
        shadow-lg
        transition-transform duration-500 ease-in-out
        hover:scale-105 hover:shadow-xl
      ">
        <h2 className="
          text-3xl sm:text-4xl
          font-bold leading-normal
          uppercase
        ">
          ENHANCE YOUR SPACE WITH <br /> MODERN AUTOMATIC DOORS <br /> AND SMART TECHNOLOGY!
        </h2>
      </div>

      {/* Right Section */}
      <div className="
        w-full md:w-[60%]
        bg-black text-white
        p-8 sm:p-10
        shadow-lg
      ">
        <div className="flex flex-col gap-5 font-oswald">
          {listItems.map((item, index) => (
            <div
              key={index}
              className="
                group flex items-center gap-4
                text-md md:text-lg text-white
                transition-transform duration-300 ease-in-out
                hover:translate-x-2.5
              "
            >
              <span className="
                text-2xl text-[#007bff]
                transition-transform duration-300 ease-in-out
                group-hover:rotate-6 group-hover:scale-110
              ">
                {item.icon}
              </span>
              <p className="mb-0" dangerouslySetInnerHTML={{ __html: item.text }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDoors;