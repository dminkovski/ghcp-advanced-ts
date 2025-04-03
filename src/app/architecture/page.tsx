'use client';

import React from 'react';
import { TodoItem, Todos } from '@/components/todo';
import architectureGif from '@public/ghcp-architecture.gif';
import Image from 'next/image';
import CodeBlock from '@/components/code-block';

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
    <CodeBlock>"Let's create a Service Layer for the Users API."</CodeBlock>
    <p className='mt-3 text-md font-bold'>Ask follow up questions:</p>
    <CodeBlock>"How can we make sure it is according to safety best practices?"</CodeBlock>
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
