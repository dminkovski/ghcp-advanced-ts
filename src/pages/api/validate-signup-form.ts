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

  // If validation passes, proceed with further logic (e.g., saving to database)
  return res.status(400).json({ error: 'Not implemented' });
}