export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <span className='font-mono text-sm text-gray-500'>
        <code style={{ whiteSpace: "pre-line" }}>{children}</code>
      </span>
  );
}
