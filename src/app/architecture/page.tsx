'use client';

import CodeBlock from '@/components/code-block';
import { TodoItem, Todos } from '@/components/todo';
import architectureGif from '@public/ghcp-architecture.gif';
import Image from 'next/image';
import React from 'react';

const Instructions = () => {
  return (
    <div className=''>
    <h1 className="text-primary text-lg">Architecture</h1>
    <p>Using GithubCopilot we can reason and get help on architecture and coding best practices right in the IDE.</p>
    <p className='mt-3 mb-5 text-md font-bold'>Use conversational chat right in your IDE.</p>
    <p>In this example we will create a Service Layer for our Users API.</p>
    <Todos>
      <TodoItem>1. Open up Visual Studio Code.</TodoItem>
      <TodoItem>2. Open <CodeBlock>pages/api/users.ts</CodeBlock></TodoItem>
      <TodoItem>3. Open GitHub Copilot Chat.</TodoItem>
      <TodoItem>4. Ask GitHub Copilot Chat to create a Service Layer for your Users API.</TodoItem>
    </Todos>
    <p className='mt-5 text-md font-bold'>Try the following prompt:</p>
    <CodeBlock>{"Let's create a Service Layer for the Users API."}</CodeBlock>
    <p className='mt-5 text-md font-bold'>Now try a better one:</p>
    <CodeBlock>{"I want a clean service layer for our Users API in TypeScript. It should support create, read, update, delete."}</CodeBlock>
    <p className='mt-5 text-md font-bold'>Try with Structure:</p>
    <CodeBlock>{"Generate a UserService class that provides methods like createUser, getUserById, updateUser, and deleteUser."}</CodeBlock>
    <p className='mt-3 text-md font-bold'>Ask follow up questions:</p>
    <CodeBlock>{"How can we make sure it is according to safety best practices?"}</CodeBlock>
    <h1 className="text-primary text-lg mt-5">Prompts Guideline:</h1>
    <ul>
    <li>Define the goal more clearly (CRUD, testing, DI, etc.)</li>
    <li>They hint at file or class structure</li> 
    <li>They allow Copilot to predict your intent more accurately</li>
    </ul>
    <div className='mt-5 bg-gray-100 p-4 rounded-md'>
        <h1 className="text-primary text-lg mt-5 mb-5">Chat Demo</h1>
        <Image
          alt='Architecture'
          src={architectureGif}
          width={800}
          height={800}
        />
      </div>
  </div>
  )
}


export default function Page() {

  return (
    <div>
    <Instructions />
    </div>
  );
}
