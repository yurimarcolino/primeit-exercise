import { Input } from "@/ui/Input";
import { Select } from "@/ui/Select";
import { DeletePanel } from "../DeletePanel";
import { Panel } from "@/ui/Panel";

interface FormPanelProps {
  errors: any;
  index: number;
  remove: (index: number) => void;
}

const SELECT_OPTIONS = [
  {
    value: "fixed",
    label: "Fixed",
  },
  {
    value: "percentage",
    label: "Percentage",
  },
]

export function FormPanel({ errors, index, remove }: FormPanelProps) {
  return (
    <Panel>
      <Input
        id="interval1"
        type="date"
        label="Start date"
        field="startDate"
        index={index}
        error={errors.investment?.[index]?.startDate?.message}
      />

      <Input
        id="interval2"
        type="date"
        label="End date"
        field="endDate"
        index={index}
        error={errors.investment?.[index]?.endDate?.message}
      />

      <Select
        options={SELECT_OPTIONS}
        id="valueType"
        label="Value type"
        field="valueType"
        index={index}
        error={errors.investment?.[index]?.valueType?.message}
      />
      <Input
        type="number"
        id="amount"
        label="Amount"
        field="amount"
        index={index}
        error={errors.investment?.[index]?.amount?.message}
      />
      {index > 0 && (<DeletePanel index={index} remove={remove} />)}
    </Panel>
  );
}
