import React, { useState } from 'react';
import './App.css';
import HoverMenu from './components/HoverMenu';

function App() {
  const [image, setImage] = useState(null);
  const [source, setSource] = useState('');

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

  return (
    <div className="App">
      <h1>Wonder Sprouts</h1>
      <HoverMenu onGenerateImage={generateImage} onTextToSpeech={textToSpeech}>
        <p id="plainText">
          A young dragon dreams of going to dragon school but first he must find his lost bell. Another great decodable reader from BookBot.
        </p>
      </HoverMenu>
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