// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HoverMenu from './components/HoverMenu';
import TextInput from './components/TextInput';
import VerticalMenu from './components/VerticalMenu';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LearningModule from './components/LearningModule';
import RightSidebar from './components/RightSidebar';
import Bell from './components/Bell';
import LoginButton from './components/LoginButton';
import Login from './components/Login';
import logo from './logo.png';

function App() {
  const [image, setImage] = useState(null);
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
        <div className="flex justify-between items-center w-full p-4">
          <div></div>
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" style={{ marginRight: '1200px', marginTop: '10px' }}/> {/* Add the logo image */}
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <LoginButton />
            </Link>
            <Bell />
          </div>
        </div>
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <VerticalMenu onMenuClick={handleMenuClick} />
        <RightSidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learningmodule" element={<LearningModule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <>
              <div className="centered-container">
                {!userText ? (
                  <TextInput onTextSubmit={handleTextSubmit} />
                ) : (
                  <div className="centered-text-box">
                    <HoverMenu onGenerateImage={generateImage} onTextToSpeech={textToSpeech} image={image} setImage={setImage}>
                      <p className="text-2xl font-semibold">{userText}</p>
                    </HoverMenu>
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
