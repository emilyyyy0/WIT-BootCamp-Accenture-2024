// components/RightSidebar.js
import React from 'react';

const RightSidebar = () => {
  return (
    <div className="fixed top-0 right-0 h-full bg-transparent text-green-700 p-4 flex flex-col items-center space-y-8">
      <button className="w-12 h-12 flex items-center justify-center hover:bg-green-100 rounded-full">
        <img src="/images/palette-icon.png" alt="Icon 1" className="w-8 h-8" />
      </button>
      <button className="w-12 h-12 flex items-center justify-center hover:bg-green-100 rounded-full">
        <img src="/images/letter-icon.png" alt="Icon 2" className="w-8 h-8" />
      </button>
      <button className="w-12 h-12 flex items-center justify-center hover:bg-green-100 rounded-full">
        <img src="/images/textSpeech-icon.png" alt="Icon 3" className="w-8 h-8" />
      </button>
      <button className="w-12 h-12 flex items-center justify-center hover:bg-green-100 rounded-full">
        <img src="/images/sparkle-icon.png" alt="Icon 4" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default RightSidebar;
