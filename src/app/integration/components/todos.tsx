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
                <TodoItem>1. Create a state variable to hold the user input.</TodoItem>
                <TodoItem>2. Create a function to handle input changes.</TodoItem>
                <TodoItem>3. Create a function to handle button clicks.</TodoItem>
                <TodoItem>4. Reverse the user input and update the message.</TodoItem>
                <TodoItem>5. Display the reversed input message.</TodoItem>
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