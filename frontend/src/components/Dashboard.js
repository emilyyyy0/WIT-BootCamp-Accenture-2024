// components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen pt-10">

        <div style={{ position: 'absolute', top: '100px', left: '100px', display: 'flex', alignItems: 'center', flexDirection: 'row-reverse'}}> 
          <h2 className="text-5xl font-semibold mb-4">Hello Theodore</h2>
          <img
            src="/images/theodore.png" // Path to your home icon image
            alt="theodre"
            className="w-25 h-25 ml-2" // Adjusted size and added margin-left
          />
        </div>

        <div style={{position: 'absolute', top: '180px', left: '140px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxSizing: 'border-box'}}>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2" style={{ textAlign: 'left' }}>Your veggie patch</h3>
          <img
            src="/images/veggie-patch.png" // Path to your home icon image
            alt="veggie"
            className="w-70 h-200 ml-2" // Adjusted size and added margin-left
          />
        </div>

        <div style={{position: 'absolute', top: '180px', left: '800px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2" style={{ textAlign: 'left' }}>Your recent viewed lessons</h3>
          <img
            src="/images/recent-view.png" // Path to your home icon image
            alt="recent"
            className="w-50 h-100 ml-2" // Adjusted size and added margin-left
          />
        </div>

        <div style={{position: 'absolute', top: '525px', left: '800px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2" style={{ textAlign: 'left' }}>This week's work progress</h3>
          <img
            src="/images/progress.png" // Path to your home icon image
            alt="recent"
            className="w-80 h-100 ml-2" // Adjusted size and added margin-left
          />
        </div>


        
      
      <div style={{ position: 'absolute', top: '10px', left: '100px' }}> {/* New container for the button */}
        <button
            onClick={navigateHome}
            className="px-4 py-2 bg-customGreen text-white rounded hover:bg-customGreen"
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

export default Dashboard;
