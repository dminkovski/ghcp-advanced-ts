---
applyTo: "*.tsx"
---
# Project coding standards for TypeScript and React

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

## React Guidelines
- Every React Client function name should start with "clientOnly"
- Use functional components with hooks
- Follow the React hooks rules (no conditional hooks)
- Any hook is always to be named "use" as a prefix
- Always us React.FC type for components with children
- Keep components small and focused
- Use CSS modules for component styling
- Every React Client Component name starts with "ClientComponent"