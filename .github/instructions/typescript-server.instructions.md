---
applyTo: "*.ts"
---
# Project coding standards for TypeScript and React with Next.js

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

## TypeScript Guidelines
- Any function name starts with "serverOnly"
- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- variables are always of type "any". Never us any other type.
- Use optional chaining (?.) and nullish coalescing (??) operators