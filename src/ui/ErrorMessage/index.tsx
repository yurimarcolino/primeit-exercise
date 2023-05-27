interface ErrorMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-xs text-red-500">{error}</p>
}
