import Summary from "@/components/molecules/Summary";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function SummaryPage() {
  return (
    <div className={`min-h-screen min-w-screen p-10 bg-slate-950 ${inter.className}`}>
      <Summary />
    </div>
  )
}
