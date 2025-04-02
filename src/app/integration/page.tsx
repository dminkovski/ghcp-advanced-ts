'use client'

import React, { useState } from 'react';
import IntegrationTodos from './components/todos';
import CompletionGif from "@public/ghcp-comment-completion.gif"
import Image from 'next/image';

const Instructions = () => {
  return (
  <div>
    <h1 className="text-primary text-lg mt-5">Integration in the IDE</h1>
    <p>Go to the source code and implement the reversed input function in <span className='bg-dark font-mono text-sm text-gray-500'>src/app/integration/page.tsx</span></p>
    <p className='mt-3 text-md font-bold'>Use comments and try to use autocomplete to achieve the desired outcome.</p>
    <IntegrationTodos /> 
  </div>
  )
}

export default function IntegrationPage() {
  // State to hold the displayed message.
   
  
  // State to hold the user input

  // Function to handle input change

  // Function to handle button click

  return (
    <div>
      <Instructions />
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
      <div className='mt-5 bg-gray-100 p-4 rounded-md'>
      <h1 className="text-primary text-lg mt-5 mb-5">Completion Demo</h1>
      <Image
      alt='Completion GIF'
      src={CompletionGif}
      width={800}
      height={600}/>
      </div>
   
    </div>
  );
};
