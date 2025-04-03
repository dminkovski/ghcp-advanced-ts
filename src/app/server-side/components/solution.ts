'use server';

import type { NextApiRequest, NextApiResponse } from 'next'
 
export const config = {
  api: {
      bodyParser: true, // Enable body parsing for JSON data
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const errors: Record<string, string> = {};
  const { username, email, password } =  req.body;

  // Validate username
  if (!username || username.trim().length < 3) {
    errors.username = 'Username must be at least 3 characters long.';
  }

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Email is invalid.';
  }

  // Validate password
  if (!password || password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.';
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // If validation passes, proceed with further logic (e.g., saving to database)
  return res.status(200).json({ message: 'Validation successful' });
}