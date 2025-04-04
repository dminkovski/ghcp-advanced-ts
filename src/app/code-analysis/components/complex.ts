/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

// !!!INSECURE & COMPLEX ON PURPOSE: DO NOT USE IN PRODUCTION

import { NextApiRequest, NextApiResponse } from "next";

let users: any[] = [];

export async function login(req: NextApiRequest,
  res: NextApiResponse) {
  try {
    const { username, password } = req.body;
    const user = users.find((u) => u.username == username);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    if (user.password != password) {
      res.status(401).send("Invalid password");
      return;
    }
    const token = Buffer.from(`${username}:${Date.now()}`).toString("base64");
    console.log("User logged in:", username, "with token:", token);

    res.status(200).send({ token });
  } catch (e: unknown) {
    res.status(500).send("Something went wrong");
  }
}
