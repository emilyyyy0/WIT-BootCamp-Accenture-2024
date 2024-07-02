import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [source, setSource] = useState('');

  useEffect(() => {
    const handleSelectionChange = () => {
      const selectedText = window.getSelection().toString();
      setText(selectedText);
    };

    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  const generateImage = async () => {
    if (!text) {
      alert('Please select some text to generate an image.');
      return;
    }

    const response = await fetch('/get_image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      setImage(data.image);
      setSource(data.source);
    }
  };

  return (
    <div className="App">
      <h1>Image Generator</h1>
      <p id="plainText">A young dragon dreams of going to dragon school but first he must find his lost bell. Another great decodable reader from BookBot.</p>
      <button onClick={generateImage} disabled={!text}>Generate Image</button>
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
