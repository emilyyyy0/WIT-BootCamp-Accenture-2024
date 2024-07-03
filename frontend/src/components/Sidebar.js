// components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
    onClose();
  };

  const navigateToLearningModule = () => {
    navigate('/learningmodule');
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-customLightGreen text-white p-4 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '200px', zIndex: '40', backgroundColor: '758467'  }}
    >
      <ul className="pt-16 pl-8 text-lg">
        <li className="py-4">
          <button
            onClick={navigateToDashboard}
            className="w-full flex items-center justify-center pl-12 py-4 hover:bg-green-100 focus:outline-none"
          >
            <img src="/images/user-icon.png" alt="Dashboard" className="w-14 h-14" />
          </button>
        </li>
        <li className="py-4">
          <button
            onClick={navigateToLearningModule}
            className="w-full flex items-center justify-center pl-12 py-4 hover:bg-green-100 focus:outline-none"
          >
            <img src="/images/book-icon.png" alt="Learning Module" style={{ width: '65px', height: '65px' }} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
