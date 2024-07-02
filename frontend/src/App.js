import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [source, setSource] = useState('');

  

  const generateImage = async () => {
    const response = await fetch('/get_image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
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
      <h1>Generate Image</h1>
      <p id="plainText">A young dragon dreams of going to dragon school but first he must find his lost bell. Another great decodable reader from BookBot.</p>
      <div className="form-group">
        <label htmlFor="text">Enter Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <h3> She is eating a dragon!</h3>
      <button onClick={generateImage}>Generate</button>
      <button>test</button>

      <div id="image-container">
        {image && (
          <>
            <p>Source: {source}</p>
            <img src={`data:image/png;base64,${image}`} alt="Generated" />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
