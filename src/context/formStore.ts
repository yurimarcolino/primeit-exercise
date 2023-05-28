import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface NewInvestmentShape {
  startDate: string;
  endDate: string;
  valueType: string;
  amount: string;
}

export interface FormState {
  form: NewInvestmentShape[];
}

export interface FormActions {
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
      setForm(formValues) {
        set(({ state }) => {
          state.form = formValues;
        });
      },
    },
  }))
);
