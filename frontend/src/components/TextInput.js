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

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-4">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text here"
        className="mr-2 p-3 text-lg border rounded flex-grow"
      />
      <button type="submit" className="bg-gray-300 border-none rounded p-3 cursor-pointer text-lg font-medium uppercase">
        Submit
      </button>
    </form>
  );
};

export default TextInput;
