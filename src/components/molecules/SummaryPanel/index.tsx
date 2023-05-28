import { Panel } from "@/components/atoms/Panel";
import { SummaryTable } from "@/components/atoms/SummaryTable";
import { useFormStore } from "@/context/formStore";

export function SummaryPanel() {
  const { state } = useFormStore();

  return (
    <Panel>
      <SummaryTable props={state.form} />
    </Panel>
  )
}
