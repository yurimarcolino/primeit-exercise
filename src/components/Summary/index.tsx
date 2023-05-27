import { useFormStore } from "@/context/formStore";

export default function Summary() {
  const { state } = useFormStore();

  return (
    <div>
      <h1>Summary</h1>
      {JSON.stringify(state.form)}
    </div>
  );
}
