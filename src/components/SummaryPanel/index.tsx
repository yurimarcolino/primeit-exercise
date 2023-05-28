import { useFormStore } from "@/context/formStore";
import { Panel } from "@/ui/Panel";
import { SummaryTable } from "@/ui/SummaryTable";

export function SummaryPanel() {
  const { state } = useFormStore();

  return (
    <Panel>
      <SummaryTable props={state.form} />
    </Panel>
  )
}
