interface InputContainerProps {
  children: React.ReactNode;
}

export function InputContainer({ children }: InputContainerProps) {
  return (
    <div className="flex flex-col items-start mb-5">
      {children}
    </div>
  )
}
