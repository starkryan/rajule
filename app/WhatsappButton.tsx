"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [canPlaySound, setCanPlaySound] = useState(false);

  useEffect(() => {
    // Allow audio to play only after user interaction
    const enableSound = () => {
      setCanPlaySound(true);
      window.removeEventListener("click", enableSound); // Remove listener after interaction
      window.removeEventListener("scroll", enableSound); // Remove listener after interaction
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("scroll", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("scroll", enableSound);
    };
  }, []);

  useEffect(() => {
    // Show the button after 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
      if (canPlaySound) playSound(); // Play sound only if allowed
    }, 5000);

    // Show the "Talk to Us" label after the button appears
    const labelTimer = setTimeout(() => {
      if (showButton) setShowLabel(true);
    }, 6000); // 1 second after the button appears

    return () => {
      clearTimeout(timer);
      clearTimeout(labelTimer);
    };
  }, [showButton, canPlaySound]);

  const playSound = () => {
    const audio = new Audio("/notification.wav"); // Ensure the file is in the public folder
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
