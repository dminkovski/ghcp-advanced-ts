'use client';

import CodeBlock from "@/components/code-block";
import { TodoItem, Todos } from "@/components/todo";

export default function Page() {
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  };

  fetchData();

  return (
    <div>
      <div className=''>
      <h1 className="text-primary text-lg">Code Analysis</h1>
      <p>Using GitHub Copilot, you can analyze your workspace and get insights on code quality, architecture, and best practices directly in your IDE.</p>
      <p className='mt-3 mb-5 text-md font-bold'>Leverage conversational prompts for deeper insights.</p>
      <p>In this example, we will explore how to analyze the workspace and improve code quality using GitHub Copilot.</p>
      <Todos>
        <TodoItem>1. Open up Visual Studio Code.</TodoItem>
        <TodoItem>2. Use GitHub Copilot Chat to analyze your workspace.</TodoItem>
        <TodoItem>3. Ask GitHub Copilot Chat to review specific files or suggest improvements.</TodoItem>
      </Todos>
      <p className='mt-3 text-md font-bold'>Try the following prompt:</p>
      <CodeBlock>{"Can you analyze the code fetchData in src/app/code-analysis/page.tsx and suggest improvements?"}</CodeBlock>
      <p className='mt-3 text-md font-bold'>Focusing on technical-debt:</p>
      <CodeBlock>{"Review the fetchData function in src/app/code-analysis/page.tsx for any code smells, unnecessary complexity, or missed abstraction opportunities."}</CodeBlock>
      <p className='mt-3 text-md font-bold'>Security Review:</p>
      <CodeBlock>{"Check for potential security in src/app/code-analysis/components/complex.ts issues, such as unsafe inputs, client-side secrets, or unescaped output."}</CodeBlock>
      <p className='mt-3 text-md font-bold'>Refactoring and Optimization:</p>
      <CodeBlock>{"Suggest how to refactor src/app/code-analysis/components/complex.ts into smaller, reusable components or hooks, if applicable. Highlight what logic can be extracted."}</CodeBlock>
      <p className='mt-3 text-md font-bold'>Ask follow-up questions:</p>
      <CodeBlock>{"What are the best practices for maintaining clean and readable code?"}</CodeBlock>
    </div>
    </div>
  );
}
