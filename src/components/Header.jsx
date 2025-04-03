import React from "react";

const Header = ({ title }) => {
  return (
    <div className="bg-gradient-to-r from-[#8AAAE5] to-[#6C8CD5] text-white text-center py-3 md:py-5 mb-5 rounded-xl shadow-md w-full">
      <h1 className="text-xl md:text-2xl font-bold tracking-wide">{title}</h1>
    </div>
  );
};

export default Header;
