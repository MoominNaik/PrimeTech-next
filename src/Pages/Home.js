import React from 'react'
import MainBanner from '../Components/MainBanner/MainBanner'
import Cards from '../Components/Cards/Cards.js'
import WhyChooseAlarm from "../Components/Services/AlarmSystems/WhyChoseAlarm.js";
import WhyChooseNetworkCabling from "../Components/Services/NetworkCabling/WhyChoseNetworkCabling.js";
import WhyChooseAccessControl from "../Components/Services/AccessControl/WhyChooseAccessControl.js";
import WhyChooseCameras from "../Components/Services/Cameras/WhyChooseCameras.js";
import WhyChooseDigitalSignage from "../Components/Services/DigitalSignage/WhyChooseDigitalSignage.js";

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