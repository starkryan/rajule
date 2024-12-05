"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    // Show the button when the user interacts with the page
    const showWhatsAppButton = () => {
      setShowButton(true);
      setShowLabel(true); // Show the label immediately
      window.removeEventListener("click", showWhatsAppButton);
      window.removeEventListener("scroll", showWhatsAppButton);
    };

    window.addEventListener("click", showWhatsAppButton);
    window.addEventListener("scroll", showWhatsAppButton);

    return () => {
      window.removeEventListener("click", showWhatsAppButton);
      window.removeEventListener("scroll", showWhatsAppButton);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 flex items-center gap-2 transition-all duration-500 ${
        showButton ? "right-5" : "-left-40"
      } z-50`}
    >
      <a
        href="https://wa.me/17788324598" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-green-600"
      >
        <FaWhatsapp size={28} />
      </a>
      {showLabel && (
        <a
          href="https://wa.me/17788324598" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium transition-all duration-500 hover:bg-green-600"
        >
          Talk to Us
        </a>
      )}
    </div>
  );
};

export default WhatsAppButton;
