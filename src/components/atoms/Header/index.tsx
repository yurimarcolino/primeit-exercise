interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex justify-center py-5 text-white font-bold text-lg">
      {title}
    </header>
  )
}
