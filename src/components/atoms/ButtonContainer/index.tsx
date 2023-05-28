interface ButtonContainerProps {
  children: React.ReactNode
}

export function ButtonContainer({ children }: ButtonContainerProps) {
  return (
    <div className="flex justify-end mt-5 gap-3">
      {children}
    </div>
  )
}
