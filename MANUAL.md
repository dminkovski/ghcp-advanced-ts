# Using GitHub Copilot

This guide outlines the steps to get started with the project, understand the workspace, and leverage GitHub Copilot effectively.

---

## Setup and Preparation

**Clone the Repository**  
  Ensure the repository is cloned in advance and all dependencies are installed. Verify the project is ready to run.

**Open the Project**  
  Launch the project in **VSCode** for development. 
  Make sure **GitHub Copilot** is working.


## 1. Understanding the Workspace using ```/explain```
"I just joined a new repo and want to understand what's going on."

Start with [`package.json`](./package.json) : it often reveals the entry points and dev scripts.

Ask Copilot for a workspace summary:
```
@workspace /explain
```

This gives a high-level overview: structure, dependencies, and likely intentions of the repo.

---

## 2.  Chat with Copilot to Learn Interactively
"I want to understand how I can run a project."

Ask GitHub Copilot in chat:  
```
> How do I run this project?
```
You’ll likely get back:
```
npm run dev
```
**Pro tip**: Talk to Copilot like a teammate. Be conversational but clear in your intent.

---

## 3. Understanding Individual Files
"Let’s dig into our first challenge."

Open these files:
  - [`src/pages/api/validate-signup-form.ts`](./src/pages/api/validate-signup-form.ts)
  - [`src/app/server-side/components/form.tsx`](./src/app/server-side/components/form.tsx)

"Let's use GitHub Copilot Explain feature but this time for these files."

Use Copilot to explain
```
@workspace /explain #file:form.tsx #file:validate-signup-form.ts
```
**Tip**: You can reference multiple files explicitly using `#file` to provide context to GitHub Copilot.

**Learning**: ```/explain``` is great for giving us a summary and explaining code.

---

## 4. Use Inline Chat for Documentation

"This file could use some docs."

Open [`src/app/server-side/components/form.tsx`](./src/app/server-side/components/form.tsx).

Use `Ctrl + I` or GitHub Copilot Chat to generate documentation for the `SignUpForm` component:
```
> 'Add documentation for SignUpForm' or /doc
```

**Learning:** GitHub Copilot helps onboard others and increases code clarity.

## 5. Implement Features with Inline Suggestions

"Now let's actually implement the missing feature of username validation."

Open [`src/pages/api/validate-signup-form.ts`](./src/pages/api/validate-signup-form.ts).

Begin typing the following comment:
  ```
  > // Check if username is provided and has at least 3 characters.
  ```

Let GitHub Copilot suggest code inline:
- Press `Tab` to accept
- Press Alt + ` or Alt + ] to see other options.

**Learning:** Think of this as live pair programming — Copilot offers suggestions, you decide.

## 6. Summarize or Refactor Existing Code

"Sometimes we need to refactor legacy code."

Open [`src/components/validation-helpers.ts`](./src/components/validation-helpers.ts).

Ask GitHub Copilot Chat:
```
> Summarize this file and suggest how it can be refactored.
```

**Learning:** Great way to onboard yourself into existing codebases and refactor them.

## 7. Copilot Edits

"Let's look at some other Real-Life Use Cases like writing tests."

  Ask GitHub Copilot Edits and attach the ```validation-helper.ts``` file:
  ```
  > Write a unit test using Jest for validation-helper.
  ```

**Learning:** This is where Copilot becomes a teammate, not a tool.

## 8. Advanced Features

### Different Models (GPT-4, Claude etc.) 
"Want to switch brains behind Copilot?"

Open Copilot Chat and Click the dropdown at the bottom (or where a model is displayed)

Choose between models like (03.04.25):
- Claude 3.5 Sonnet (Preview) : Writing, summarizing, analyzing documents or chat-style input.
- GPT-4.5 (Preview) : Accurate Q&A, coding help, creative tasks.
- GPT-4o : Your best all-rounder: coding, chat, content, reasoning.
- o1 (Preview) : Use for curiosity or performance testing

**Pro tip:** If you’re not happy with the response - try different models.

### Generating Custom Scripts & Tools (Shell, SQL, YAML)
You can also use Copilot like a script generator. Try asking:
```
> Generate a bash script that backs up all `.ts` files into a zip
```
or
```
> Create a GitHub Actions workflow that lints, tests, and builds this project
```

### Dev SideKick

Copilot becomes more powerful when you treat it like a junior dev or brainstorming partner. 

Try prompts like:

```
> Draft a README for this project
```
```
> How would you optimize this API endpoint?
```

## Developer Challenge (Optional)
"Your turn!"

Add a feature that blocks user submission unless the address ends with ```@example.com.```

Use inline suggestions + chat to complete the task.

## Prompt Engineering Tips

Some quick tips for better results:

| ❌ Bad Prompt                         | ✅ Good Prompt                                                                 |
|-------------------------------------|--------------------------------------------------------------------------------|
| "Fix this"                          | "Refactor this to use async/await and add error handling"                     |
| "Write code"                        | "Create a React hook that fetches user data using SWR"                        |
| "Add comments"                      | "Add JSDoc to this function with parameter and return types"                 |
| "How does this work?"               | "Explain how this `useEffect` hook fetches data and why the dependency array is empty" |
| "Make it better"                    | "Improve performance by memoizing this component and reducing re-renders"    |


## Key Takeaways
- GitHub Copilot is more than autocomplete — it’s a teammate.
- Use inline comments to spark suggestions
- Use Copilot Chat for clarity, planning, and learning
- Always review generated code before shipping