import React from "react";

const WhyChooseCameras = () => {
  const features = [
    {
      icon: "🎥",
      title: "HD Quality",
      description: "Crystal-clear footage ensures no detail is missed — day or night.",
    },
    {
      icon: "📲",
      title: "Remote Access",
      description: "View live camera feeds from anywhere using your smartphone or tablet.",
    },
    {
      icon: "🚨",
      title: "Motion Alerts",
      description: "Instant push notifications for detected movement on your premises.",
    },
    {
      icon: "☁️",
      title: "Cloud Storage",
      description: "Secure backups accessible anytime from the cloud.",
    },
  ];

  return (
    <section
      className="
        flex justify-center items-center
        bg-gray-100 text-gray-700
        px-8 md:px-16 py-20 md:py-32
        w-full mx-auto
        pb-5 md:pb-32
        mt-24 md:mt-32
      "
      aria-labelledby="camera-surveillance-heading"
    >
      <div className="max-w-4xl lg:max-w-6xl text-center font-oswald w-full">
        
        {/* Main Heading */}
        <h2
          id="camera-surveillance-heading"
          className="
            text-3xl md:text-4xl
            text-[#b30000]
            mb-5
            font-bebas
            tracking-[1px]
            font-bold
          "
        >
          Security Camera Installation Services in Mississippi
        </h2>

        {/* Description */}
        <p
          className="
            text-base md:text-lg
            text-gray-600
            mb-10
            leading-relaxed
            max-w-3xl mx-auto
          "
        >
          PrimeTech offers state-of-the-art surveillance systems in Jackson, Ridgeland, Clinton, and surrounding areas. Enjoy crystal-clear video, remote viewing, motion alerts, and secure cloud storage — all installed by certified professionals.
        </p>

        {/* Features List */}
        <ul
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-8
            mb-10
            w-full
          "
        >
          {features.map((item, index) => (
            <li
              key={index}
              className="
                group
                flex items-center
                gap-5
                p-8
                rounded-lg
                shadow-xl
                hover:shadow-2xl
                transition-transform duration-300 ease-in-out
                bg-gradient-to-r from-[#341414] via-[#800D0D] to-[#341414]
                hover:-translate-y-1.5
              "
            >
              <span
                className="
                  text-3xl text-[#b30000]
                  transition-transform duration-300 ease-in-out
                  group-hover:rotate-6 group-hover:scale-110
                "
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div className="text-left text-white">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-base">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseCameras;