'use client'

import React, { useState } from 'react';
import { TodoItem, TodoList } from '@/components/todo';

export default function FasterCodeTodos() {
    const [allTodosCompleted, setAllTodosCompleted] = useState<boolean>(false);
  
    const handleAllCompletedChange = (allCompleted: boolean) => {
      setAllTodosCompleted(allCompleted);
    };

    return (
    <div>
        <div className='bg-blue-100 p-8 rounded-md mt-5 text-md'>
            <TodoList onAllCompletedChange={handleAllCompletedChange}>
            <TodoItem>
                        1. Create a function to extract form data from the request body.{' '}
                        <span className='bg-dark font-mono text-sm text-gray-500'>
                            // Extract the json body data
                        </span>
                    </TodoItem>
                    <TodoItem>
                        2. Validate the username and password field to be at least 3 letters.{' '}
                        <span className='bg-dark font-mono text-sm text-gray-500'>
                            // Check username ...
                        </span>
                    </TodoItem>
                    <TodoItem>
                        3. Return the validation failure or success message.{' '}
                        <span className='bg-dark font-mono text-sm text-gray-500'>
                            //...
                        </span>
                    </TodoItem>
            </TodoList>
        </div>
        {allTodosCompleted && (
          <p style={{ marginTop: '20px', color: 'green' }}>
            Congratulations! All todos are completed. <br />
            { /* displays like code block */ }
            <span>Run <span className="font-mono text-sm text-gray-500">`npm test faster-code`</span> in VS Code Terminal to check your implementation.</span>
          </p>
        )}
    </div>
    );
}