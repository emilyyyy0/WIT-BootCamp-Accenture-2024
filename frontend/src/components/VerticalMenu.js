// components/VerticalMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerticalMenu = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="fixed top-0 left-0 h-full bg-gray-100 flex flex-col items-center py-4 space-y-8 w-24 z-50">
      <button onClick={onMenuClick} className="w-16 h-16 flex items-center justify-center z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <button onClick={navigateToDashboard} className="w-16 h-16 flex items-center justify-center">
        <img src="/images/user-icon.png" alt="User Icon" className="opacity-100" />
      </button>
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/images/book-icon.png" alt="Book Icon" className="opacity-50" />
      </div>
    </div>
  );
};

export default VerticalMenu;
