import { SummaryPanel } from "../SummaryPanel";
import { Button } from "@/components/atoms/Button";
import { ButtonContainer } from "@/components/atoms/ButtonContainer";
import { Header } from "@/components/atoms/Header";
import { useFormStore } from "@/context/formStore";
import { useRouter } from "next/router";

export default function Summary() {
  const { state, actions } = useFormStore();

  function completeForm() {
    //make api calls and redirect somewhere.
    if (state.form.length === 0) return;
    actions.setIsFormFinished(true)
    alert('Form completed');
  }

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <Header title="Summary" />
      <SummaryPanel />

      <ButtonContainer>
        <Button
          type="button"
          onClick={completeForm}
          disabled={state.isFormFinished}
        >
          Complete
        </Button>
        <Button
          type="button"
          onClick={() => router.push('/')}
          disabled={state.isFormFinished}
        >
          Go back
        </Button>
      </ButtonContainer>
    </div>
  );
}
