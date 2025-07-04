import React from "react";
// import "./DescriptionBox.css";

const DescriptionBox = () => {
  // Base classes for the navigation boxes (to avoid repetition)
  const navBoxBaseClasses = `
    flex items-center justify-center      # display: flex; align-items: center; justify-content: center;
    text-base font-semibold               # font-size: 16px; font-weight: 600;
    border border-[#D0D0D0]              # border: 1px solid #d0d0d0; (Using arbitrary color)
    flex-1 h-16 sm:flex-none sm:w-[171px] sm:h-[70px] # Responsive: Equal width & smaller height mobile, fixed size sm+
  `;

  return (
    // .descriptionBox equivalent
    <div className="
      mx-4 lg:mx-[170px]                  # Responsive margin-x: small on mobile, original 170px on lg+
      my-16 lg:my-[120px]                  # Responsive margin-y: smaller on mobile, original 120px on lg+
    ">
      {/* .descriptionBox-navigator equivalent */}
      <div className="flex"> {/* display: flex; */}

        {/* Non-faded nav box ("Description") */}
        <div className={`${navBoxBaseClasses}`}>
          Description
        </div>

        {/* Faded nav box ("Reviews") */}
        {/* .descriptionBox-nav-box.fade equivalent */}
        <div className={`
          ${navBoxBaseClasses}
          bg-[#FBFBFB]                      # background: #FBFBFB; (Arbitrary color)
          text-[#555]                       # color: #555; (Arbitrary color)
        `}>
          Reviews (122)
        </div>
      </div>

      {/* .descriptionBox-description equivalent */}
      <div className="
        flex flex-col                      # display: flex; flex-direction: column;
        gap-6                              # gap: 25px; (gap-6 = 24px, closest standard value)
        border border-[#D0D0D0]            # border: 1px solid #D0D0D0;
        px-4 pt-8 pb-12 md:pt-12 md:px-12 md:pb-[70px] # Responsive padding: smaller mobile, original md+ (using p-12=48px, pb-[70px])
      ">
        <p>
          Made from ultra-soft, high-quality cotton blend, this sweatshirt
          ensures that your child stays warm and comfortable throughout the day.
          The fabric is gentle on the skin, making it ideal for playtime,
          school, or cozying up on chilly evenings.
        </p>
        <p>
          Made from ultra-soft, high-quality cotton blend, this sweatshirt
          ensures that your child stays warm and comfortable throughout the day.
          The fabric is gentle on the skin, making it ideal for playtime,
          school, or cozying up on chilly evenings.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;