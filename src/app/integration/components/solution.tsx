'use client'

import React, { useState } from 'react';

/**
 * Integration Page
 * This page demonstrates how to work with inline comments and context-aware suggestions.
 */
export default function IntegrationPage() {
  // State to hold the displayed message
  const [message, setMessage] = useState<string>('');

  // State to hold the user input
  const [userInput, setUserInput] = useState<string>('');

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  // Function to handle button click
  const handleClick = () => {
    // Reverse the user input and update the message
    const reversedInput = userInput.split('').reverse().join('');
    setMessage(`${reversedInput}`);
  };

  return (
    <div>
        <input
          data-testid="reverse-input"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter text to reverse"
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button data-testid="reverse-button" onClick={handleClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Reverse Text
        </button>
        {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
    </div>
  );
};
