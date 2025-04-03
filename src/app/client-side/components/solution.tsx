'use client'

import React, { useState } from 'react';
import CompletionGif from "@public/ghcp-comment-completion.gif";
import Image from 'next/image';

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
    
    setSearchQuery(event.target.value);
    setError(''); // Clear error when user types in the input field
  };
  // Function to handle search button click
  const handleSearch = async () => {
    if (!searchQuery) {
      setError('Please enter a username to search.');
      return;
    }

    try {
      setUsers([]); // Clear previous results
      setError(''); // Clear previous error
      const response = await fetch(`/api/users?query=${searchQuery}`);
      if (!response.ok) {
        throw new Error('No users found.');
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (error:any) {
      setError(error.message);
    }
  };

  return (
    <div>
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
    </div>
  );
}
