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
          top: rect.top - containerRect.top - 60,
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
          background: '#f0f0f0',
          padding: '5px',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>
          <button onClick={onGenerateImage}>🖼️</button>
          <button onClick={onTextToSpeech}>🔊</button>
          <button onClick={() => console.log('Text options clicked')}>abc</button>
        </div>
      )}
      {children}
    </div>
  );
};

export default HoverMenu;