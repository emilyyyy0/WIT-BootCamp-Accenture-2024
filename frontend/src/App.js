import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import HoverMenu from './components/HoverMenu';
import TextInput from './components/TextInput';

import dragonImage from './image_cache/dragon.png';
import forestImage from './image_cache/forest.png';
// ... import other images as needed

const imageMap = {
  'dragon': dragonImage,
  'forest': forestImage,
  // ... map other images
};

const articles = {
  easy: "A young dragon dreams of going to dragon school but first he must find his lost bell. Another great decodable reader from BookBot.",
  medium: "Sarah loved to read books about magical creatures. Her favorite was about a friendly dragon who could fly high in the sky.",
  hard: "In a green forest, a little rabbit hopped along a winding path. She saw a tall tree with a round hole. Inside the hole lived a wise owl. The rabbit and owl became friends. They decided to explore the forest together. They passed by a sparkling stream where fish swam. Near the stream, they found a patch of colorful flowers. Butterflies danced around the petals. A big rock sat nearby, perfect for resting. As the sun began to set, the friends saw a cozy cottage. Smoke rose from its chimney. They smelled fresh cookies baking inside. The rabbit and owl said goodbye and returned to their homes. They looked forward to more adventures in their friendly forest."
};

function App() {
  const [image, setImage] = useState(null);
  const [source, setSource] = useState('');
  // const [userText, setUserText] = useState(''); // Commented out as it's unused
  const [difficulty, setDifficulty] = useState('easy');
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const floatingImageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.difficulty-dropdown')) {
        setShowDifficulty(false);
      }
      if (floatingImageRef.current && !floatingImageRef.current.contains(event.target)) {
        setImage(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // const generateImage = async () => {
  //   const selection = window.getSelection();
  //   const selectedText = selection.toString().trim().toLowerCase();
  //   if (!selectedText) {
  //     alert('Please select some text to generate an image.');
  //     return;
  //   }
  
  //   const fileName = selectedText.replace(/\s+/g, '_');
  //   const imagePath = `/image_cache/${fileName}.png`;
  
  //   try {
  //     const response = await fetch(imagePath);
  //     if (response.ok) {
  //       const blob = await response.blob();
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImage(reader.result.split(',')[1]);
  //         setSource(`Local image: ${fileName}.png`);
  //       };
  //       reader.readAsDataURL(blob);
  
  //       // Set image position near the selected text
  //       const range = selection.getRangeAt(0);
  //       const rect = range.getBoundingClientRect();
  //       setImagePosition({
  //         x: rect.left + window.scrollX,
  //         y: rect.bottom + window.scrollY
  //       });
  //     } else {
  //       alert('No matching image found for the selected text.');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching image:', error);
  //     alert('Error fetching image. Please try again.');
  //   }
  // };

  // const generateImage = () => {
  //   const selection = window.getSelection();
  //   const selectedText = selection.toString().trim();
  //   if (!selectedText) {
  //     alert('Please select some text to generate an image.');
  //     return;
  //   }
  
  //   const imagePath = `/image_cache/${selectedText}.png`;
  
  //   // Set image position near the selected text
  //   const range = selection.getRangeAt(0);
  //   const rect = range.getBoundingClientRect();
  //   setImagePosition({
  //     x: rect.left + window.scrollX,
  //     y: rect.bottom + window.scrollY
  //   });
  
  //   // Set the image directly using the URL
  //   setImage(imagePath);
  //   setSource(`Image: ${selectedText}.png`);
  // };
  const generateImage = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim().toLowerCase();
    if (!selectedText) {
      alert('Please select some text to generate an image.');
      return;
    }

    if (imageMap[selectedText]) {
      setImage(imageMap[selectedText]);
      setSource(`Local image: ${selectedText}.png`);
      
      // Set image position
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setImagePosition({
        x: rect.left + window.scrollX,
        y: rect.bottom + window.scrollY
      });
    } else {
      alert('No matching image found for the selected text.');
    }
  };

  const textToSpeech = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      window.speechSynthesis.speak(utterance);
    }
  };

  // const handleTextSubmit = (text) => {
  //   setUserText(text);
  // };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1, // Make content take available space
  };


  return (
    <div className="App">
      <div className="background"></div>
      <div className="content" style={contentStyle}>
        <h1 className="title">Wonder Sprouts</h1>
        <div className="difficulty-dropdown">
          <button onClick={() => setShowDifficulty(!showDifficulty)}>
            Difficulty: {difficulty} ▼
          </button>
          {showDifficulty && (
            <div className="dropdown-content">
              <button onClick={() => { setDifficulty('easy'); setShowDifficulty(false); }}>Easy</button>
              <button onClick={() => { setDifficulty('medium'); setShowDifficulty(false); }}>Medium</button>
              <button onClick={() => { setDifficulty('hard'); setShowDifficulty(false); }}>Hard</button>
            </div>
          )}
        </div>
        <div className="article-container">
          <HoverMenu onGenerateImage={generateImage} onTextToSpeech={textToSpeech}>
            <p>{articles[difficulty]}</p>
          </HoverMenu>
        </div>
        {image && (
          <div 
            ref={floatingImageRef}
            className="floating-image" 
            style={{ 
              position: 'absolute',
              left: `${imagePosition.x}px`, 
              top: `${imagePosition.y}px` 
            }}
          >
            <img src={image} alt="Generated Image" />
            <p>Source: {source}</p>
          </div>
      )}
      </div>
    </div>
  );
}


export default App;

// this is joyce