// components/Sidebar.js that pops out when hamburger menu is pressed
import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '270px', zIndex: '40' }}
    >
      <ul className="pt-16 pl-12 text-lg">
        <li className="py-4"><a href="#">Menu Item 1</a></li>
        <li className="py-4"><a href="#">Menu Item 2</a></li>
        <li className="py-4"><a href="#">Menu Item 3</a></li>
        <li className="py-4"><a href="#">Menu Item 4</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
