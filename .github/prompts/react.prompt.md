---
mode: 'agent'
tools: ['codebase']
description: 'Generate a new React form component'
---
Your goal is to generate a new React form component based on the files in this workspace.

Ask for the form name and fields if not provided.

Requirements for the form:
* Always define TypeScript types for your form data
* Prefer *uncontrolled* components using register
* Use `defaultValues` to prevent unnecessary rerenders
* Create reusable validation schemas in separate files
* Use TypeScript types to ensure type safety
* Customize UX-friendly validation rules
