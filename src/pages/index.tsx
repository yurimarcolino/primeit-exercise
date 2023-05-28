import { MultiStepForm } from '@/components/molecules/MultiStepForm'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen min-w-screen py-10 bg-slate-950 ${inter.className}`}>
      <MultiStepForm />
    </div>
  )
}
