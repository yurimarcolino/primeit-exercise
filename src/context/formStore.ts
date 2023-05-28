import { NewInvestmentShape } from "@/components/molecules/MultiStepForm/schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface FormState {
  form: NewInvestmentShape[];
}

interface FormActions {
  setForm: (formValues: NewInvestmentShape[]) => void;
}

export interface FormProps {
  actions: FormActions;
  state: FormState;
}

export const useFormStore = create<FormProps>()(
  immer((set, get) => ({
    state: {
      form: [],
    },
    actions: {
      setForm(value) {
        set(({ state }) => {
          state.form = value;
        });
      }
    },
  }))
);
