'use client'

import React, { useState } from 'react';
import IntegrationTodos from './components/todos';

export default function IntegrationPage() {
  return (
    <div>
      <div className=''>
        <h1 className="text-primary text-lg">Integration Page</h1>
        <p>This page demonstrates working with inline comments and context-aware suggestions.</p>
        <p className='mt-5'><b>Task:</b> Go to the source code and implement the reversed input function.</p>
        <IntegrationTodos />
      </div>
      <div className='bg-gray-100 p-4 rounded-md mt-5'>
        <input
          data-testid="reverse-input"
          type="text"
          value={''} // userInput
          onChange={()=>{alert("Not implemented")}} // handleInputChange
          placeholder="Enter text to reverse"
          style={{ padding: '10px', marginRight: '10px' }}
          className='border border-gray-300 rounded-md p-2'
        />
        <button data-testid="reverse-button" onClick={()=>{alert("Not implemented")}} className='bg-blue-500 text-white px-4 py-2 rounded-md' style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Reverse Text
        </button>
        { /* Display the reversed message here. */ }
      </div>
    </div>
  );
};
