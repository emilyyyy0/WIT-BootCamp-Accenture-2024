// components/VerticalMenu.js
import React from 'react';

const VerticalMenu = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-gray-100 flex flex-col items-center py-4 space-y-8 w-24">
      <div className="w-12 h-12 flex items-center justify-center">
        <img src="/images/menu-icon.png" alt="Another Icon" className="opacity-100" />
      </div>
      <div className="w-12 h-12 flex items-center justify-center">
        <img src="/images/user-icon.png" alt="User Icon" className="opacity-100" />
      </div>
      <div className="w-12 h-12 flex items-center justify-center">
        <img src="/images/book-icon.png" alt="Book Icon" className="opacity-100" />
      </div>
    </div>
  );
};

export default VerticalMenu;
