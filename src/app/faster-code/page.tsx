import { SignUpForm } from './components/form';
import FasterCodeTodos from './components/todos';


const Instructions = () => {
  return (
    <div className=''>
    <h1 className="text-primary text-lg">Faster Code Page</h1>
    <p>Go to the source code and implement the validate function in <span className='bg-dark font-mono text-sm text-gray-500'>src/pages/api/validate-signup-form.ts</span></p>
    <p className='mt-3 text-md font-bold'>Leverage autocomplete to achieve the desired outcome.</p>
    <FasterCodeTodos />
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
