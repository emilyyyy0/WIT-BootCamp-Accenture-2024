import React, { useState } from 'react';
import './TextInput.css'; // Import the custom CSS file

const TextInput = ({ onTextSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTextSubmit(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex flex-col items-center w-full">
        <textarea
          className="textarea-large appearance-none bg-white border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          placeholder="Please enter text"
          value={inputText}
          onChange={handleChange}
          rows="10"
          style={{ height: '500px', width: '1200px' }} // Adjust the height and width here
        />
        <button
          type="submit"
          className="mt-4 bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TextInput;
