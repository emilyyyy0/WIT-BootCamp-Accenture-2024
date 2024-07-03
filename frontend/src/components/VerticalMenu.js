// components/VerticalMenu.js
import React from 'react';

const VerticalMenu = ({ onMenuClick }) => {
  return (
    <div className="fixed top-0 left-0 h-full bg-customLightGreen flex flex-col items-center py-4 space-y-8 w-24 z-50">
      <button onClick={onMenuClick} className="w-16 h-16 flex items-center justify-center z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default VerticalMenu;
