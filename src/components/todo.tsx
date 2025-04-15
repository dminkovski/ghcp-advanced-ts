'use client';

import React, { ReactNode, useEffect, useState } from 'react';

/**
 * Todo Component
 * A reusable component to manage a list of todos with their own state.
 */
interface TodoListProps {
  onAllCompletedChange?: (allCompleted: boolean) => void;
  children: React.ReactElement<TodoItemProps>[];
}

interface TodoItemProps {
  onCompletionChange?: (completed: boolean) => void;
  children: ReactNode;
}

export const TodoItem = ({ children, onCompletionChange }: TodoItemProps) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    const newCompletedState = !completed;
    setCompleted(newCompletedState);
    if (onCompletionChange) {
      onCompletionChange(newCompletedState);
    }
  };

  return (
    <div className="flex items-center space-x-2 text-l">
      <input
      type="checkbox"
      checked={completed}
      onChange={handleCheckboxChange}
      className="form-checkbox"
      />
      <a
      style={{ textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer' }}
      className={`font-medium ${completed ? 'text-gray-500' : 'text-blue'}`}
      onClick={() => handleCheckboxChange()}
      >
      {children}
      </a>
    </div>
  );
};

const TodoList = ({ onAllCompletedChange, children }: TodoListProps) => {
  const [completedStates, setCompletedStates] = useState<boolean[]>([]);

  useEffect(() => {
    // Initialize completedStates based on the number of children
    const initialStates = React.Children.map(children, () => false) as boolean[];
    setCompletedStates(initialStates);
    }, []);

  useEffect(() => {
    if (completedStates.length > 0) {
      const allCompleted = completedStates.every((state) => state);
      if (onAllCompletedChange) {
        onAllCompletedChange(allCompleted);
      }
    }
  }, [completedStates, onAllCompletedChange]);

  const handleCompletionChange = (index: number, completed: boolean) => {
    setCompletedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = completed;
      return newStates;
    });
  };

  const childrenArray = React.Children.toArray(children) as React.ReactElement<TodoItemProps>[];

  return (
    <div>
      <div>
        {childrenArray.map((child, index) =>
          React.cloneElement(child as React.ReactElement&any, {
            onCompletionChange: (completed: boolean) => handleCompletionChange(index, completed),
          })
        )}
      </div>
    </div>
  );
};

export const Todos = ({children, completedMessage = "Congratulations! All todos are completed."}: {children: any, completedMessage?: any}) => {
    const [allTodosCompleted, setAllTodosCompleted] = useState<boolean>(false);
  
    const handleAllCompletedChange = (allCompleted: boolean) => {
      setAllTodosCompleted(allCompleted);
    };

    return (
    <div>
        <div className='bg-blue-100 p-8 rounded-md mt-5 text-md'>
            <TodoList onAllCompletedChange={handleAllCompletedChange}>
                {children}
            </TodoList>
        </div>
        {allTodosCompleted && (
          <div style={{ marginTop: '20px', color: 'green' }}>
            { completedMessage }
          </div>
        )}
    </div>
    );
}