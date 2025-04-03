'use client';

import { useState, FormEvent  } from 'react';

export const SignUpForm = () => {
const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
const [success, setSuccess] = useState<string | null>(null);
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
 
    try {
        const formData = {
        username: (event.currentTarget.username as HTMLInputElement).value,
        email: (event.currentTarget.email as HTMLInputElement).value,
        password: (event.currentTarget.password as HTMLInputElement).value,
        confirmPassword: (event.currentTarget['confirm-password'] as HTMLInputElement).value,
        };

      const response = await fetch('/api/validate-signup-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(formData),
      })
  
      // Handle response if necessary
      const data = await response.json()
      console.log(data);
      if (!response.ok) {
        throw new Error(data || 'An error occurred while validating the form.');
      }else {
        // Handle successful validation (e.g., redirect to another page or show success message)
        setSuccess(data.message || 'Form submitted successfully!');
      }

    } catch (error: any) {
      // Capture the error message to display to the user
      setError(JSON.stringify(error))
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

    return (
      <div className="signup-form-container max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              id="username" 
              data-testid="username"
              name="username" 
              placeholder="Enter your username" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              id="email" 
              data-testid="email"
              name="email" 
              placeholder="Enter your email" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              data-testid="password"
              name="password" 
              placeholder="Enter your password" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              data-testid="confirm-password"
              id="confirm-password" 
              name="confirm-password" 
              placeholder="Confirm your password" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {success && <div data-testid="message-success" style={{ color: 'green' }}>{success}</div>}
          {error && <div data-testid="message-error" style={{ color: 'red' }}>{error}</div>}

          <button 
            type="submit" 
            data-testid="submit-button"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  };