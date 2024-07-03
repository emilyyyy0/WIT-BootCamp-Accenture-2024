// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file if it's separate

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">My name is:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">I am _ years old:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Start</button>
      </form>

      <div style={{ position: 'absolute', top: '300px', left: '350px'}}>
      <img
            src="/images/carrot.png" // Path to your home icon image
            alt="theodre"
            className="w-25 h-25 ml-2" // Adjusted size and added margin-left
          />
      </div>

      <div style={{ position: 'absolute', top: '600px', left: '300px'}}>
      <img
            src="/images/brocolli.png" // Path to your home icon image
            alt="theodre"
            className="w-25 h-25 ml-2" // Adjusted size and added margin-left
          />
      </div>

      <div style={{ position: 'absolute', top: '600px', left: '1300px'}}>
      <img
            src="/images/mushroom.png" // Path to your home icon image
            alt="theodre"
            className="w-25 h-25 ml-2" // Adjusted size and added margin-left
          />
      </div>

    </div>
  );
};

export default Login;
