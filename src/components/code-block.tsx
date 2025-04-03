export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <span className='bg-dark font-mono text-sm text-gray-500'>
        <code>{children}</code>
      </span>
  );
}
