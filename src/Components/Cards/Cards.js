import React from 'react';
import serviceCardImage from '../Assets/serviceCard.jpg';
import Link from 'next/link';

const Cards = () => {
  const services = [
    {
      title: 'Alarm Systems Installation',
      slug: '/AlarmSystems',
      description:
        'Protect your home or business with our professional alarm systems in Jackson, Madison, and surrounding Mississippi areas. Includes control panel, sensors, sirens, and 24/7 monitoring.',
    },
    {
      title: 'Automatic Door Openers',
      slug: '/AutomaticDoors',
      description:
        'Secure and accessible entry with ADA-compliant automatic door systems, perfect for commercial and public buildings in Mississippi.',
    },
    {
      title: 'Network Cabling Services',
      slug: '/NetworkCabling',
      description:
        'Structured CAT5e & CAT6 cabling for high-speed, reliable networking in office and industrial environments across Jackson and nearby cities.',
    },
    {
      title: 'Fiber Optic Cabling',
      slug: '/FiberOptics',
      description:
        'Future-proof your infrastructure with ultra-fast fiber optic installation. Ideal for businesses in Ridgeland, Clinton, and beyond.',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#4E0000] to-black py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bebas font-bold text-white tracking-wide mb-14">
          IT & Security Installation Services in Mississippi
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.slug}
              aria-label={`Learn more about ${service.title}`}
              className="block w-full bg-cover bg-center rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ backgroundImage: `url(${serviceCardImage.src})` }}
            >
              <div className="backdrop-brightness-[.35] h-full px-6 py-8 flex flex-col justify-between text-center">
                <h3 className="text-2xl md:text-[26px] text-[#FF4C4C] font-bebas font-bold mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-white font-quicksand font-semibold leading-relaxed mb-2">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;