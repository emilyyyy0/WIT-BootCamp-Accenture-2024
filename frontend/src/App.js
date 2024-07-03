import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HoverMenu from './components/HoverMenu';
import TextInput from './components/TextInput';
import VerticalMenu from './components/VerticalMenu';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const [image, setImage] = useState(null);
  const [source, setSource] = useState('');
  const [userText, setUserText] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App flex flex-col items-center justify-start h-screen text-center">
        <Sidebar isOpen={isSidebarOpen} />
        <VerticalMenu onMenuClick={handleMenuClick} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={
            <>
              <h1 className="text-6xl font-bold my-8">Wonder Sprouts</h1>
              <div className="w-full flex flex-col items-center justify-center">
                <TextInput onTextSubmit={handleTextSubmit} />
                {userText && (
                  <div className="flex items-center justify-center w-full mt-8">
                    <HoverMenu onGenerateImage={generateImage} onTextToSpeech={textToSpeech}>
                      <p className="text-2xl font-semibold">{userText}</p>
                    </HoverMenu>
                  </div>
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
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
