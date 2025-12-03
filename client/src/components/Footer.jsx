import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center p- mt-4">
      <div className="flex gap-4 text-2xl mb-2">
        <div className="bg-blue-700 text-white rounded-full p-2 text-2xl hover:bg-blue-800 cursor-pointer">
          <FiFacebook />
        </div>
        <div className="bg-pink-600 text-white rounded-full p-2 text-2xl hover:bg-pink-700 cursor-pointer">
          <FiInstagram />
        </div>

        <div className="bg-blue-700 text-white rounded-full p-2 text-2xl hover:bg-blue-800 cursor-pointer">
          <FiLinkedin />
        </div>
      </div>
      <div className="text-center text-gray-600">
        <p className="text-sm">All rights reserved © 2024</p>
      </div>
    </div>
  );
};

export default Footer;
