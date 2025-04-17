/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import CodeBlock from '@/components/code-block';
import { TodoItem, Todos } from '@/components/todo';
import CompletionGif from "@public/ghcp-comment-completion.gif";
import Image from 'next/image';
import React, { useState } from 'react';

const Instructions = () => {
  return (
    <div>
      <h1 className="text-primary text-lg">GithubCopilot leverages your Context</h1>
      <p>Go to the source code and implement the handleSearch function in <CodeBlock>src/app/client-side/page.tsx</CodeBlock></p>
      <p className='mt-3 text-md font-bold'>Use comments and try to use autocomplete to achieve the desired outcome:</p>
      <CodeBlock>{'// OnChange save searchQuery'}</CodeBlock>
      <Todos completedMessage={<div> Congratulations! All todos are completed. <br /><span>Run <CodeBlock>`npm test client-side`</CodeBlock> in VS Code Terminal to check your implementation.</span></div>}>
          <TodoItem>1. Write a function to handle search input changes. <CodeBlock>{'// OnChange save searchQuery'}</CodeBlock></TodoItem>
          <TodoItem>2. Write a function to fetch search results based on the query. <CodeBlock>{'// Fetch results from API '}</CodeBlock></TodoItem>
          <TodoItem>3. Display the search results dynamically. <CodeBlock>{'// Display search results'}</CodeBlock></TodoItem>
          <TodoItem>4. Add error handling for failed search requests. <CodeBlock>{'// Handle error and display it'}</CodeBlock></TodoItem>
        </Todos> 
    </div>
  );
};

/**
 * Search for users by username.
 * * @param {string} searchQuery - The username to search for.
 * * @param {Function} setUsers - Function to set the list of users.
 * API Endpoint: /api/users?query={username} 
 * Using fetch to call the API endpoint and get the list of users.
 * @returns 
 */
export default function ClientSidePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  };
  // Function to handle search button click
  const handleSearch = async () => {  

  };

  return (
    <div>
      <Instructions />
      <div className='bg-gray-100 p-4 rounded-md mt-5'>
        <input
          data-testid="search-input"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter username to search"
          style={{ padding: '10px', marginRight: '10px' }}
          className='border border-gray-300 rounded-md p-2'
        />
        <button
          data-testid="search-button"
          onClick={handleSearch}
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Search Users
        </button>
        {error && <p className='text-red-500 mt-3'>{error}</p>}
        <ul className='mt-3'>
          {users && users.map((user: any, index: number) => (
            <li key={index} className='border-b border-gray-300 py-2'>
              {user.username}
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-5 bg-gray-100 p-4 rounded-md'>
        <h1 className="text-primary text-lg mt-5 mb-5">Completion Demo</h1>
        <Image
          alt='Completion GIF'
          src={CompletionGif}
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}
