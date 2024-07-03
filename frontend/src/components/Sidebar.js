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
      className={`fixed top-0 left-0 h-full bg-gray-400 text-white p-4 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '250px', zIndex: '40' }}
    >
    
      <ul className="pt-16 pl-8 text-lg">
        <li className="py-4">
          <button onClick={navigateToDashboard} className="flex items-center justify-end space-x-4">
            <img src="/images/user-icon.png" alt="Dashboard" className="w-8 h-8 mr-2" />
            Dashboard
          </button>
        </li>
        <li className="py-4">
          <button onClick={navigateToLearningModule} className="flex items-center">
            <img src="/images/book-icon.png" alt="Learning Module" className="w-8 h-8 mr-2" />
            Learning Module
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
