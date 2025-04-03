'use client'

import React, { useState } from 'react';
import { TodoItem, TodoList } from '@/components/todo';

export default function IntegrationTodos() {
    const [allTodosCompleted, setAllTodosCompleted] = useState<boolean>(false);
  
    const handleAllCompletedChange = (allCompleted: boolean) => {
      setAllTodosCompleted(allCompleted);
    };

    return (
    <div>
        <div className='bg-blue-100 p-8 rounded-md mt-5 text-md'>
            <TodoList onAllCompletedChange={handleAllCompletedChange}>
                <TodoItem>1. Create a state variable to hold the search query. <span className='bg-dark font-mono text-sm text-gray-500'>// State variable to hold the search query</span></TodoItem>
                <TodoItem>2. Create a function to handle search input changes. <span className='bg-dark font-mono text-sm text-gray-500'>// Function to handle search input changes</span></TodoItem>
                <TodoItem>3. Create a function to fetch search results based on the query. <span className='bg-dark font-mono text-sm text-gray-500'>// Function to fetch search results</span></TodoItem>
                <TodoItem>4. Display the search results dynamically. <span className='bg-dark font-mono text-sm text-gray-500'>// Display search results</span></TodoItem>
                <TodoItem>5. Add error handling for failed search requests. <span className='bg-dark font-mono text-sm text-gray-500'>// Handle errors gracefully</span></TodoItem>
            </TodoList>
        </div>
        {allTodosCompleted && (
          <p style={{ marginTop: '20px', color: 'green' }}>
            Congratulations! All todos are completed. <br />
            { /* displays like code block */ }
            <span>Run <span className="font-mono text-sm text-gray-500">`npm test integration`</span> in VS Code Terminal to check your implementation.</span>
          </p>
        )}
    </div>
    );
}