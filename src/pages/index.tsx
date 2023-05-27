import { Inter } from 'next/font/google'
import { MultiStepForm } from '@/components/MultiStepForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen min-w-screen p-10 bg-slate-950 ${inter.className}`}>
      <MultiStepForm />
    </div>
  )
}
