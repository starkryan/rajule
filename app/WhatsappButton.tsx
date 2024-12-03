"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    // Show the button after 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
      playSound(); // Play sound when button appears
    }, 5000);

    // Show the "Talk to Us" label after the button appears
    const labelTimer = setTimeout(() => {
      if (showButton) setShowLabel(true);
    }, 6000); // 1 second after the button appears

    return () => {
      clearTimeout(timer);
      clearTimeout(labelTimer);
    };
  }, [showButton]);

  const playSound = () => {
    const audio = new Audio("../public/notification.wav"); // Replace with your sound file
    audio.play().catch((err) => console.log("Sound playback failed:", err));
  };

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
        className="bg-green-500 text-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-green-600 transition-all duration-300 animate-pulse"
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
