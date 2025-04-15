'use client';

import CodeBlock from "@/components/code-block";
import { TodoItem, Todos } from "@/components/todo";

export default function Page() {
  return (
    <div>
      <div className=''>
      <h1 className="text-primary text-lg">Advanced Control Flow</h1>
      <p>Using GitHub Copilot, you can drive the entire GitHub Copilot experience and tailor it to your workflows.</p>
      <p className='mt-3 mb-5 text-md font-bold'>Leverage flow-control prompts.</p>
      <p>In this example, we will explore how to leverage flow-control prompts to achieve our goals.</p>
      <Todos>
        <TodoItem>1. Open up Visual Studio Code.</TodoItem>
        <TodoItem>2. Ask GitHub Copilot Chat and apply advanced prompting.</TodoItem>
      </Todos>
      <p className='mt-3 text-md font-bold'>Try the following prompt with <CodeBlock>src/app/code-analysis/components/complex.ts</CodeBlock> file attached:</p>
      <CodeBlock>{"Let's refactor this step by step. Start by summarizing the code, and wait for me to confirm the next step."}</CodeBlock>
      <p className='mt-3 text-md font-bold'>Multiple Options for Design Decisions:</p>
      <CodeBlock>{"Give me 3 different approaches to implement a login function. Briefly explain the trade-offs for each."}</CodeBlock>
      <p className='mt-3 text-md font-bold'>Test Driven Development:</p>
      <CodeBlock>{"The feature is going to be about PasswordReset. Let’s use a TDD approach. First, help me write tests for this feature. Don’t generate implementation yet."}</CodeBlock>
      <p className='mt-3 text-md font-bold'>Prompt Flow for Feature Development:</p>
      <CodeBlock>{"Let's do this in steps. First summarize the purpose of the function. Then propose improvements one at a time, waiting for my go-ahead each time."}</CodeBlock>
      <p className='mt-3 text-md font-bold'>Code Review and PR Preparation:</p>
      <CodeBlock>{"You are now acting as a code reviewer. What questions would you ask before approving this PR?"}</CodeBlock>
    </div>
    </div>
  );
}
