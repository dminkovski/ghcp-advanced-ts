import CodeBlock from '@/components/code-block';
import { TodoItem, Todos } from '@/components/todo';

import { SignUpForm } from './components/form';

const Instructions = () => {
  return (
    <div className=''>
    <h1 className="text-primary text-lg">Github Copilot helps you code faster.</h1>
    <p>Go to the source code and implement the validate function in <CodeBlock>src/pages/api/validate-signup-form.ts</CodeBlock> for the form in <CodeBlock>src/app/server-side/components/form.tsx</CodeBlock></p>
    <p className='mt-3 text-md font-bold'>Leverage autocomplete to achieve the desired outcome.</p>
    <Todos completedMessage={<div> Congratulations! All todos are completed. <br /><span>Run <CodeBlock>npm test server-side</CodeBlock> in VS Code Terminal to check your implementation.</span></div>}>
      <TodoItem>
          1. Create a function to extract form data from the request body. <CodeBlock>{"// Extract the json body data"}</CodeBlock>
      </TodoItem>
      <TodoItem>
          2. Validate the username and password field to be at least 3 letters.<CodeBlock>{"// Check username ..."}</CodeBlock>
      </TodoItem>
      <TodoItem>
          3. Return the validation failure or success message.<CodeBlock>{"//..."}</CodeBlock>
      </TodoItem>
    </Todos>
  </div>
  )
}


export default function Page() {

  return (
    <div>
    <Instructions />
    <SignUpForm/>
    </div>
  );
}
