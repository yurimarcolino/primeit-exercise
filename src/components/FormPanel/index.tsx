import { Input } from "@/ui/Input";
import { InputContainer } from "@/ui/InputContainer";
import { Select } from "@/ui/Select";
import { DeletePanel } from "../DeletePanel";

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
    <section className="flex flex-col bg-slate-800 mb-10 p-5 overflow-y-auto rounded">
      <Input
        id="interval1"
        type="date"
        label="Start date"
        field={`investment.${index}.startDate`}
        error={errors.investment?.[index]?.startDate?.message}
      />

      <Input
        id="interval2"
        type="date"
        label="End date"
        field={`investment.${index}.endDate`}
        error={errors.investment?.[index]?.endDate?.message}
      />

      <Select
        options={SELECT_OPTIONS}
        id="valueType"
        field={`investment.${index}.valueType`}
        error={errors.investment?.[index]?.valueType?.message}
      />
      <Input
        type="number"
        id="amount"
        label="Amount:"
        field={`investment.${index}.amount`}
        error={errors.investment?.[index]?.amount?.message}
      />
      {index > 0 && (<DeletePanel index={index} remove={remove} />)}
    </section>
  );
}
