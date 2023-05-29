import Summary from "@/components/molecules/Summary";
import { useFormStore } from "@/context/formStore";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function SummaryPage() {
  const { state, actions } = useFormStore();
  const router = useRouter();

  useEffect(() => {
    if (state.isFormFinished) {
      actions.setForm([]);
      router.push('/')
    }
  }, [state.isFormFinished, router, actions]);

  return (
    <div className={`flex justify-center items-center min-h-screen min-w-screen p-10 bg-slate-950 ${inter.className}`}>
      <Summary />
    </div>
  )
}
