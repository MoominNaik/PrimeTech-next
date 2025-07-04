import React from "react";
// import "./Footer.css"; // Ensure you have this CSS file
import footerlogo from "../Assets/logo.png";

const Footer = () => {
  return (
    // .footer equivalent
    <footer className="
      bg-black                             # background: black;
      text-white                           # color: white;
      px-5 py-10                           # padding: 40px 20px; (py-10=40px, px-5=20px)
      mt-14
      text-center                          # text-align: center;
      flex flex-col                        # display: flex; flex-direction: column;
      items-center                         # align-items: center;
    ">
      {/* Logo */}
      <div className="footer-logo">
        <img
          src={footerlogo}
          alt="PrimeTech Logo" // Added alt text for accessibility
          className="
            w-full                           # width: 100%; (allows scaling down)
            h-auto                           # height: auto;
            max-w-[240px] sm:max-w-[300px]   # Responsive max-width: smaller on mobile, original 300px on sm+
            mb-5                             # margin-bottom: 20px; (mb-5 = 1.25rem = 20px)
          "
        />
      </div>

      {/* .footer-content equivalent (mainly for structure) */}
      <div className="
        flex flex-col justify-center items-center w-full # Added w-full for potential structure needs
      ">
        {/* .footer-contact equivalent */}
        <div className="footer-contact text-center mb-5"> {/* Added margin-bottom for spacing before bottom */}

          {/* .contact-items equivalent */}
          <div className="
            flex flex-col                    # Mobile: stack vertically
            sm:flex-row sm:flex-wrap         # sm+: row layout with wrapping
            justify-center items-center      # Center items in both layouts
            gap-3 sm:gap-5                   # Smaller gap mobile (12px), original gap sm+ (20px)
          ">
            {/* Contact Item 1 */}
            <p>📞 601.521.3772</p>

            {/* Contact Item 2 (Website Link) */}
            <p>
              🌐{" "}
              <a
                href="https://www.primetechms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-white                       # Link specific color
                  no-underline                     # text-decoration: none;
                  transition-colors duration-300 ease-in-out # transition properties
                  hover:text-red-600               # hover:color: red; (Using Tailwind red-600)
                "
              >
                www.primetechms.com
              </a>
            </p>

            {/* Contact Item 3 (Email Link) */}
            <p>
              ✉️{" "}
              <a
                href="mailto:rflowers@primetechms.com"
                className="
                  text-white
                  no-underline
                  transition-colors duration-300 ease-in-out
                  hover:text-red-600
                "
              >
                rflowers@primetechms.com
              </a>
            </p>
          </div>
        </div>
      </div>

    {/* .footer-bottom equivalent */}
    <div className="
                          # margin-top: 20px;
      pt-10                   # Increased padding-top to make space for the line above the text
      text-sm                 # font-size: 14px;
      text-gray-400           # color: #aaa (approx);
      w-full                  # Container takes full width
      flex flex-col items-center # Center children (line and text)
    ">
      {/* Add a div for the line */}
      <div className="h-[1px] w-20 sm:w-64 bg-gray-600 mb-2.5"></div> {/* Adjust width (w-*), color (bg-*), height (h-*), and margin-bottom (mb-*) as needed */}

      <p className="pt-2.5">© {new Date().getFullYear()} PrimeTech. All Rights Reserved.</p> {/* Original pt-2.5 moved here */}
    </div>
    </footer>
  );
};

export default Footer;