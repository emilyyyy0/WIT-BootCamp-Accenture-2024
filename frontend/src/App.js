import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HoverMenu from './components/HoverMenu';
import TextInput from './components/TextInput';
import VerticalMenu from './components/VerticalMenu';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LearningModule from './components/LearningModule';
import RightSidebar from './components/RightSidebar';
import Bell from './components/Bell';

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

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className="App flex flex-col items-center justify-start bg-customLightGreen h-screen text-center">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <VerticalMenu onMenuClick={handleMenuClick} />
        <RightSidebar />
        <Bell />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learningmodule" element={<LearningModule />} />
          <Route path="/" element={
            <>
              <h1 className="text-6xl font-bold my-8">Wonder Sprouts</h1>
              <div className="centered-container">
                {!userText ? (
                  <TextInput onTextSubmit={handleTextSubmit} />
                ) : (
                  <div className="centered-text-box">
                    {image && (
                      <div className="image-container">
                        <img src={`data:image/png;base64,${image}`} alt="Generated Image" className="generated-image" />
                      </div>
                    )}
                    <HoverMenu onGenerateImage={generateImage} onTextToSpeech={textToSpeech}>
                      <p className="text-2xl font-semibold">{userText}</p>
                    </HoverMenu>
                    {image && (
                      <p className="image-source">Source: {source}</p>
                    )}
                  </div>
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
