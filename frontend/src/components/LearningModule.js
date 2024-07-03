// LearningModule/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LearningModule = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen pt-10">

        <h1 className="text-4xl font-bold mb-8">Learning Module</h1>
      
      <div style={{ position: 'absolute', top: '10px', left: '100px' }}> {/* New container for the button */}
        <button
            onClick={navigateHome}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
            <img
            src="/images/home-icon.png" // Path to your home icon image
            alt="Home"
            className="w-10 h-10 hover:opacity-75"
            />
        </button>
        </div>
    </div>
  );
};

export default LearningModule;
