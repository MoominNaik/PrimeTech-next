'use client';

import React from 'react';
import GetQuoteForm from '@/Components/GetQuote/GetQuoteForm';
import ContactInfo from '@/Components/ContactInfo/ContactInfo';

const Ask = () => {
  const headingClasses = "text-white text-2xl md:text-3xl mb-2.5 font-extrabold font-bebas tracking-[0.5px]";
  const paragraphClasses = "text-white text-lg font-oswald";
  const messageContainerClasses = "text-center mx-auto w-full max-w-lg md:max-w-2xl p-5";

  return (
    <div className="py-10 bg-black min-h-screen">
      {/* Quote Form Section */}
      <div className={`${messageContainerClasses} mt-10 mb-5`}>
        <h1 className={headingClasses}>
          Request a Quote for IT Infrastructure or Security Installation
        </h1>
        <p className={paragraphClasses}>
          Tell us about your project — whether it&apos;s alarm systems, access control, cameras, network cabling, or digital signage — and we&apos;ll provide a detailed estimate.
        </p>
      </div>

      <GetQuoteForm />

      {/* Contact Section */}
      <div className={`${messageContainerClasses} mt-24 sm:mt-48 md:mt-80`}>
        <h2 className={headingClasses}>
          Book a Free On-Site Consultation
        </h2>
        <p className={paragraphClasses}>
          Connect with our team to explore solutions tailored for your home or business in Madison, Jackson, or surrounding Mississippi areas.
        </p>
      </div>

      <ContactInfo />
    </div>
  );
};

export default Ask;