import { Inter } from 'next/font/google'
import { MultiStepForm } from '@/components/MultiStepForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen bg-slate-800 ${inter.className}`}>
      <MultiStepForm />
    </div>
  )
}
