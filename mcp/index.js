import { promises as fs } from "fs"

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"

const server = new McpServer({
  name: "MCP Server Boilerplate",
  version: "1.0.0",
})

server.tool("add", "Add two numbers", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
  content: [{ type: "text", text: String(a + b) }],
}))

server.tool("get_todos", "Get all todos in my project", {}, async ({}) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(todos),
      },
    ],
    }
});

server.tool("get_todo_by_id", "Get a specific todo by id", {id: z.number()}, async ({id}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo = await response.json();
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(todo),
      },
    ],
  }
});

const transport = new StdioServerTransport()
await server.connect(transport)