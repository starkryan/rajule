"use client";
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the button after 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <a
      href="https://wa.me/17789324598" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 ${
        showButton ? 'right-5' : '-left-20'
      } bg-green-500 text-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-green-600 transition-all duration-500 z-50`}
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
