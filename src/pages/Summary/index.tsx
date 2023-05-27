import { Summary } from "@/components/Summary";
import Link from "next/link";

export default function SummaryPage() {
  return (
    <>
      <Summary />
      <button onClick={() => alert('Form completed')}>Complete the form submission</button>
      <Link href="/">Go back</Link>
    </>
  )
}
