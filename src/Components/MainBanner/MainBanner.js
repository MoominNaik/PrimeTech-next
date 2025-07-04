import React from 'react';

const MainBanner = () => {
  const featureItem = "text-base md:text-lg flex items-center text-white font-sans";
  const checkmark = "mr-3 text-xl md:text-2xl";

  return (
    <section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* SEO-Optimized Heading */}
        <h1 className="
          text-4xl sm:text-5xl lg:text-6xl 
          font-bebas 
          font-bold 
          tracking-wide 
          text-black 
          mb-6
        ">
          IT Infrastructure & Security Installation Services in Jackson, Madison & Beyond
        </h1>

        {/* SEO-Supported Subheading */}
        <p className="
          text-lg 
          font-sans 
          font-normal 
          text-gray-700 
          max-w-3xl 
          mx-auto 
          tracking-wide 
          mb-16
        ">
          From alarm systems and access control to network cabling and cameras — PRIMETECH delivers end-to-end IT installation solutions tailored for homes and businesses in Jackson, Madison, Clinton, Pearl, and surrounding Mississippi areas.
        </p>

        {/* Features Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-3 
          gap-y-10 gap-x-12 
          bg-gradient-to-r from-[#230000] via-[#610000] to-[#230000] 
          rounded-2xl 
          shadow-[0_4px_20px_rgba(52,20,20,0.7)] 
          px-8 py-12 
          text-left
        ">
          <div className="space-y-5">
            <div className={featureItem}><span className={checkmark}>✔</span> Seamless Integration</div>
            <div className={featureItem}><span className={checkmark}>✔</span> Unmatched Reliability</div>
            <div className={featureItem}><span className={checkmark}>✔</span> Scalable Infrastructure</div>
          </div>

          <div className="space-y-5">
            <div className={featureItem}><span className={checkmark}>✔</span> Advanced Security Systems</div>
            <div className={featureItem}><span className={checkmark}>✔</span> Multi-Door Access Control</div>
            <div className={featureItem}><span className={checkmark}>✔</span> Automatic Firmware Updates</div>
          </div>

          <div className="space-y-5">
            <div className={featureItem}><span className={checkmark}>✔</span> Cutting-Edge Technology</div>
            <div className={featureItem}><span className={checkmark}>✔</span> Plug-and-Play Setup</div>
            <div className={featureItem}><span className={checkmark}>✔</span> 24/7 Mississippi-Based Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;