import React from "react";

const accessControlFeatures = [
  {
    icon: "🔐",
    title: "Biometric Authentication",
    description:
      "Unlock secure access with fingerprint, facial recognition, and retina scans.",
  },
  {
    icon: "📡",
    title: "RFID & NFC Systems",
    description:
      "Streamline entry with fast and reliable RFID and NFC access technology.",
  },
  {
    icon: "📊",
    title: "Audit Trail & Reports",
    description:
      "Monitor and log every access attempt with detailed event reports.",
  },
  {
    icon: "🌐",
    title: "Cloud-Based Control",
    description:
      "Manage and monitor your access control systems remotely from anywhere.",
  },
];

const WhyChooseAccessControl = () => {
  return (
    <section
      className="
        flex flex-col items-center justify-center
        bg-white text-black
        px-8 lg:px-16 py-16 lg:py-24
        mx-auto mb-5 md:mb-32 mt-10 md:mt-32
        transition-transform duration-300 ease-in-out
        hover:-translate-y-2.5
      "
      aria-labelledby="access-control-heading"
    >
      {/* Header */}
      <div className="text-center mt-12 lg:mb-16 max-w-4xl mx-auto">
        <h2
          id="access-control-heading"
          className="
            font-bebas text-4xl lg:text-5xl text-[#b30000]
            uppercase tracking-[1px]
            font-bold
          "
        >
          Access Control Systems in Jackson, Mississippi
        </h2>
        <p
          className="
            font-oswald text-lg lg:text-xl text-black
            leading-relaxed mt-4
          "
        >
          Enhance your security with smart, scalable access control solutions for businesses, homes, and campuses across Mississippi.
        </p>
      </div>

      {/* Grid */}
      <div
        className="
          grid grid-cols-1 lg:grid-cols-2
          gap-8 lg:gap-10 w-full max-w-6xl
        "
        role="list"
      >
        {accessControlFeatures.map((feature, idx) => (
          <div
            key={idx}
            role="listitem"
            className="
              group relative overflow-hidden text-center
              bg-gradient-to-r from-[#341414] via-[#800D0D] to-[#341414]
              p-10 lg:p-12 rounded-lg
              shadow-[0_8px_30px_rgba(0,0,0,0.3)]
              hover:shadow-[0_16px_50px_rgba(0,0,0,0.5)]
              transition-[transform,box-shadow] duration-300 ease-in-out
              hover:-translate-y-3
            "
          >
            <div className="mb-5">
              <span
                aria-hidden="true"
                className="
                  text-6xl text-[#b30000] inline-block
                  transition-transform duration-300 ease-in-out
                  group-hover:scale-130 group-hover:rotate-15
                "
              >
                {feature.icon}
              </span>
            </div>
            <h3 className="font-oswald text-2xl lg:text-3xl mb-2.5 text-white">
              {feature.title}
            </h3>
            <p className="font-oswald text-base lg:text-lg text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseAccessControl;