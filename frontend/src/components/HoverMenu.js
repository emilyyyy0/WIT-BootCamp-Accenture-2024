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
    <div ref={containerRef} style={{ position: 'relative' }}>
      {isHovering && (
        <div style={{
          position: 'absolute',
          top: `${menuPosition.top}px`,
          left: `${menuPosition.left}px`,
          background: 'white',
          padding: '4px',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          display: 'flex',
          gap: '4px',
          border: '1px solid #e0e0e0'
        }}>
          <button onClick={onTextToSpeech} style={buttonStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
          <button onClick={onGenerateImage} style={buttonStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </button>
          <button onClick={() => console.log('Text options clicked')} style={textButtonStyle}>
            abc
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

const buttonStyle = {
  background: '#e0e0e0', // Darker background color
  border: 'none',
  borderRadius: '4px',
  padding: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  color: '#333', // Darker text color for better contrast
};

const textButtonStyle = {
  ...buttonStyle,
  fontSize: '10px',
  fontWeight: '300',
  letterSpacing: '1px',
  textTransform: 'lowercase',
};


export default HoverMenu;