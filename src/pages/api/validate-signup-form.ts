'use server';

import type { NextApiRequest, NextApiResponse } from 'next'

import { users } from './users';

export const config = {
  api: {
      bodyParser: true, // Enable body parsing for JSON data
  },
};

/**
 * Validate the signup form data.
 * Username must be at least 3 characters long.
 * Error messages are returned for each field that fails validation.
 * @param req 
 * @param res 
 * @returns JSON response with error messages or success status - error:, success:
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { username, email } = req.body;

  users.push({
    username,
    email,
  });

  return res.status(400).json({ error: 'Not implemented' });
}