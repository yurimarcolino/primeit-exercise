import { FormCompleted } from '@/components/atoms/FormCompleted';
import { MultiStepForm } from '@/components/molecules/MultiStepForm'
import { useFormStore } from '@/context/formStore'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { state } = useFormStore();
  return (
    <div className={`flex justify-center items-center min-h-screen min-w-screen py-10 bg-slate-950 ${inter.className}`}>
      {state.isFormFinished ? (<FormCompleted />) : (<MultiStepForm />)}
    </div >
  )
}
