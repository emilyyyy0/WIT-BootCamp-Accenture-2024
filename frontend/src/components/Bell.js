// components/Bell.js
import React from 'react';

const Bell = () => {
  return (
    <div className="fixed top-4 right-4">
      <button className="w-10 h-10 flex items-center justify-center hover:bg-green-100">
        <img src="/images/bell-icon.png" alt="Notifications" className="w-10 h-10" />
      </button>
    </div>
  );
};

export default Bell;
