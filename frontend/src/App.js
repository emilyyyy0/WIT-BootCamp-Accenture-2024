import React, { useState } from 'react';
import './App.css';
import HoverMenu from './components/HoverMenu';
import TextInput from './components/TextInput';

function App() {
  const [image, setImage] = useState(null);
  const [source, setSource] = useState('');
  const [userText, setUserText] = useState('');


  const generateImage = async () => {
    const selectedText = window.getSelection().toString();
    if (!selectedText) {
      alert('Please select some text to generate an image.');
      return;
    }

    const response = await fetch('/get_image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: selectedText }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      setImage(data.image);
      setSource(data.source);
    }
  };

  const textToSpeech = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleTextSubmit = (text) => {
    setUserText(text);
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1, // Make content take available space
  };



  return (
    <div className="App">
      <h1>Wonder Sprouts</h1>
      <div style={contentStyle}>
        <TextInput onTextSubmit={handleTextSubmit} />
        {userText && (
          <HoverMenu onGenerateImage={generateImage} onTextToSpeech={textToSpeech}>
            <p>{userText}</p>
          </HoverMenu>
        )}
      </div>
      <div id="result">
        {image && (
          <>
            <img src={`data:image/png;base64,${image}`} alt="Generated Image" />
            <p>Source: {source}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;