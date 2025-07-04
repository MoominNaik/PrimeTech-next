import React from 'react';
import image1 from '../Assets/1.png';
import image2 from '../Assets/2.png';
import image3 from '../Assets/3.png';
import image4 from '../Assets/4.png';

const FeaturesBanner = () => {
  return (
    // .image-gallery equivalent
    <div className="
      flex                             # display: flex;
      justify-center                   # justify-content: center;
      items-center                     # align-items: center;
      bg-gray-300                      # background-color: #dedede; (bg-gray-300 is #d1d5db, very close. Use bg-[#dedede] for exact match if needed)
      p-2.5                            # padding: 10px; (p-2.5 = 0.625rem = 10px)
      w-full                           # Ensures the banner takes the available width of its parent container
    ">
      {/* Applying styles directly to each img tag */}
      <img
        src={image1}
        alt=""
        className="
          h-auto                         # height: auto;
          flex-none                      # flex: none; (Prevent stretching/shrinking)
          max-w-[100px] mx-1             # Mobile: Smaller max-width (100px) and margin (mx-1 = 4px)
          sm:max-w-[150px] sm:mx-[5px]    # sm+ screens: Original max-width (150px) and margin (5px - arbitrary value)
        "
      />
      <img
        src={image2}
        alt=""
        className="
          h-auto
          flex-none
          max-w-[100px] mx-1
          sm:max-w-[150px] sm:mx-[5px]
        "
      />
      <img
        src={image3}
        alt=""
        className="
          h-auto
          flex-none
          max-w-[100px] mx-1
          sm:max-w-[150px] sm:mx-[5px]
        "
      />
      <img
        src={image4}
        alt=""
        className="
          h-auto
          flex-none
          max-w-[100px] mx-1
          sm:max-w-[150px] sm:mx-[5px]
        "
      />
    </div>
  );
};

export default FeaturesBanner;