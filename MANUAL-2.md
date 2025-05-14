## 9. Multiple instruction Files in .github
You can create instruction files in **.github/instructions.**

Example file: [.github/instructions/general-coding.instructions.md](./.github/instructions/general-coding.instructions.md)

## 10. Multiple Prompt Files in .github
Create, share and use the prompts in your workspace.

You can create structured prompt templates in .github/prompts:

Example file: [.github/prompts/react.prompt.md](./.github/prompts/react.prompt.md)

Try it:
```
> /react
```
or 
```
CTRL + SHIFT + P and "Chat: Run Prompt"
```

[Read More](https://code.visualstudio.com/docs/copilot/copilot-customization)

## 11. Using MCP (Model Context Protocol)
MCP allows Copilot to use tools that you define and access information outside its model.

Use MCP in Agent Mode:
```
> "Get my remove project todos" -> tool calling "get_todos"
```


An MCP Server Example can be found in: [**.vscode/mcp.json**](./.vscode/mcp.json)
The implementation can be found in: [**mcp/index.js**](./mcp//index.js)

"Your turn!"

> Try to implement a new tool and use it!


## 12. GitHub Copilot Workspace
Run Task on Repo:

"Lets think about a better routing that will make sure the previous page tasks / todos have been finished before allowing to move on."

## 13. GItHub Copilot Project Architecture Diagram
GitHub Copilot Vision.

Drag and Drop the image of an architecture and ask questions about it:
[project-architecture-diagram.png](./public/project-architecture-diagram.png)


Use MCP in Agent Mode:
```
> List the Microservices and their relationships.
```

