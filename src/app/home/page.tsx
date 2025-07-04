export const metadata = {
  title: 'Professional IT Installation Services | PRIMETECH MCS',
  description: 'Explore our IT infrastructure services including alarm systems, access control, network cabling, cameras, and more. Serving Jackson, Madison, Clinton, Pearl, Ridgeland, and Brandon, MS.',
  keywords: [
    'IT installation Mississippi',
    'Alarm systems Jackson',
    'Access control Madison',
    'Network cabling Clinton',
    'Camera installation Pearl',
    'Digital signage Ridgeland',
    'Automatic doors installation MS'
  ],
  openGraph: {
    title: 'Explore PRIMETECH IT Services | Alarm Systems, Access Control & More',
    description: 'We offer top-rated IT solutions including security systems and structured cabling across Mississippi cities like Madison and Jackson.',
    url: 'https://www.primetechmcs.com/services',
    siteName: 'PRIMETECH MCS',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.primetechmcs.com/services',
  },
};


import React from 'react';
import MainBanner from '@/components/MainBanner/MainBanner';
import Cards from '@/components/Cards/Cards';
import WhyChooseAlarm from '@/Components/Services/AlarmSystems/WhyChoseAlarm.js';
import WhyChooseNetworkCabling from '@/Components/Services/NetworkCabling/WhyChoseNetworkCabling.js';
import WhyChooseAccessControl from '@/Components/Services/AccessControl/WhyChooseAccessControl.js';
import WhyChooseCameras from '@/Components/Services/Cameras/WhyChooseCameras.js';
import WhyChooseDigitalSignage from '@/Components/Services/DigitalSignage/WhyChooseDigitalSignage.js';
const Home = () => {
  return (
    // You might add overall page padding here if desired, e.g., <div className="pt-5">
    <div>
      <MainBanner/>
      <Cards/>
      <WhyChooseCameras />
      <WhyChooseNetworkCabling />
      {/* Add bottom margin to this component */}
      <div className="mb-16 md:mb-24"> {/* Adjust margin value (e.g., mb-16, mb-24) as needed */}
         <WhyChooseAccessControl />
      </div>
      {/* <br/><br/> Removed */}
      <WhyChooseAlarm />
      <WhyChooseDigitalSignage />
    </div>
  )
}

export default Home