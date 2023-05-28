import { Header } from "@/ui/Header";
import { SummaryPanel } from "../SummaryPanel";
import { Button } from "@/ui/Button";
import { ButtonContainer } from "@/ui/ButtonContainer";
import { useRouter } from "next/router";

export default function Summary() {
  const router = useRouter();


  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <Header title="Summary" />
      <SummaryPanel />

      <ButtonContainer>
        <Button
          type="button"
          onClick={() => alert('Form completed')}
        >
          Complete
        </Button>
        <Button type="button" onClick={() => router.push('/')}>Go back</Button>
      </ButtonContainer>
    </div>
  );
}
