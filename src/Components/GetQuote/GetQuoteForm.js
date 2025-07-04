'use client';
import React, { useState } from "react";

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success/failure state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xzzroald", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          contact: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const formInputBaseClasses = `
    w-full p-3
    border border-white bg-white
    text-black text-base rounded-md
    placeholder:text-gray-600
    transition-colors duration-300
    focus:outline-none focus:ring-0
    focus:border-[#AF0000]
  `;

  return (
    <div className="
      flex flex-col items-center
      text-center
      animate-fadeIn
      w-full px-4
      mb-12
    ">
      {status === "success" && (
        <div className="bg-green-100 text-green-800 px-6 py-4 mb-6 rounded-md shadow-md max-w-md w-full text-left">
          <h2 className="text-xl font-bold mb-1">Thank you!</h2>
          <p>Your message has been sent. We will get back to you shortly.</p>
        </div>
      )}

      {status !== "success" && (
        <form
          onSubmit={handleSubmit}
          className="
            quote-form
            w-full max-w-md sm:max-w-[600px]
            flex flex-col gap-5 items-center
            p-4 sm:p-8
            bg-gray-100
            shadow-lg rounded-lg
          "
        >
          {/* Name */}
          <div className="form-group w-full text-left flex flex-col">
            <label htmlFor="name" className="font-semibold text-black text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={formInputBaseClasses}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group w-full text-left flex flex-col">
            <label htmlFor="contact" className="font-semibold text-black text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="contact"
              name="contact"
              className={formInputBaseClasses}
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="form-group w-full text-left flex flex-col">
            <label htmlFor="message" className="font-semibold text-black text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your requirements..."
              className={`
                ${formInputBaseClasses}
                h-[120px]
                resize-y
              `}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              submit-btn
              mt-[58px]
              bg-black text-white
              px-4 py-5
              text-xl sm:text-[28px]
              font-bold font-bebas
              tracking-[0.8px]
              cursor-pointer w-full rounded-md
              max-w-md sm:max-w-[600px]
              transition-[transform,background-color,border-color,color] duration-300 ease-in-out
              shadow-[0_0_10px_rgba(0,0,0,0.3)]
              hover:scale-105 hover:text-red-600
            "
          >
            Request Estimate
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm mt-2">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default GetQuoteForm;