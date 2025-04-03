'use server';

import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
api: {
    bodyParser: true, // Enable body parsing for JSON data
},
};


interface User {
    username: string;
    email: string;
  }
  
export const users:Array<User> = [{
    username: 'john_doe',
    email: 'john@doe.com'
}];

export default async function handler(
req: NextApiRequest,
res: NextApiResponse
) {
if (req.method === 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
}
const { query } = req.query;
const searchQuery = Array.isArray(query) ? query[0] : query;
const filteredUsers = searchQuery ? users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
) : users;
    if (filteredUsers.length === 0) {
        return res.status(404).json({ error: 'No users found' });
    }
    if (filteredUsers.length > 0) {
        return res.status(200).json({users:filteredUsers});
    }
}