// components/TextInput.js
import React, { useState } from 'react';

const TextInput = ({ onTextSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTextSubmit(text);
    setText('');
  };

  const buttonStyle = {
    background: '#e0e0e0', // Darker background color
    border: 'none',
    borderRadius: '4px',
    padding: '12px 24px', // Increased padding for a bigger button
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333', // Darker text color for better contrast
  };

  const textButtonStyle = {
    ...buttonStyle,
    fontSize: '16px', // Increased font size
    fontWeight: '500', // Adjusted font weight
    letterSpacing: '1px',
    textTransform: 'uppercase', // Changed to uppercase for better visibility
  };

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the form
    width: '50%', // Make form take full width
    marginTop: '50px', // Adjust margin as needed
  };

  const inputStyle = {
    marginRight: '8px',
    padding: '12px', // Increased padding for input
    fontSize: '16px', // Increased font size
    borderRadius: '4px',
    border: '1px solid #ccc',
    flex: '1', // Make input take available space
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text here"
        style={inputStyle}
      />
      <button type="submit" style={textButtonStyle}>
        Submit
      </button>
    </form>
  );
};

export default TextInput;
