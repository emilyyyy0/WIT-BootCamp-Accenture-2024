import React, { useState, useRef, useEffect } from 'react';

const HoverMenu = ({ children, onGenerateImage, onTextToSpeech }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection.toString()) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        setMenuPosition({
          top: rect.top - containerRect.top - 40,
          left: rect.left - containerRect.left
        });
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {isHovering && (
        <div
          className="absolute bg-white p-2 rounded shadow-md flex gap-2 border border-gray-300"
          style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
        >
          <button onClick={onTextToSpeech} className="bg-customGreen border-none rounded p-2 cursor-pointer flex items-center justify-center w-8 h-8 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
          <button onClick={onGenerateImage} className="bg-customGreen border-none rounded p-2 cursor-pointer flex items-center justify-center w-8 h-8 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </button>
          <button onClick={() => console.log('Text options clicked')} className="bg-customGreen border-none rounded p-2 cursor-pointer flex items-center justify-center w-8 h-8 text-gray-800 text-xs font-light tracking-wide lowercase">
            abc
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default HoverMenu;
