import { SummaryPanel } from "../SummaryPanel";
import { Button } from "@/components/atoms/Button";
import { ButtonContainer } from "@/components/atoms/ButtonContainer";
import { Header } from "@/components/atoms/Header";
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
