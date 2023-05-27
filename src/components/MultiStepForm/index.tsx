import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { NewInvestmentFormShape, resolver } from "./schema";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@/ui/Button";
import { FormPanel } from "../FormPanel";
import { ButtonContainer } from "@/ui/ButtonContainer";
import { useFormStore } from "@/context/formStore";
import { formatDate } from "@/utils/formatDate";

export function MultiStepForm() {
  const router = useRouter();
  const { actions, state } = useFormStore();

  const newInvestmentForm = useForm<NewInvestmentFormShape>({
    mode: "onSubmit",
    resolver,
    defaultValues: {
      investment: [
        {
          startDate: "",
          endDate: "",
          valueType: "",
          amount: "",
        }
      ]
    },
  });

  const { reset, formState: { errors }, handleSubmit, control } = newInvestmentForm

  const { fields, append, remove } = useFieldArray({
    control,
    name: "investment"
  });

  useEffect(() => {
    if (state.form.length) {
      reset({ investment: state.form });
    }
  }, [reset, state.form]);

  function AppendInputs() {
    append({
      startDate: "",
      endDate: "",
      valueType: "",
      amount: "",
    });
  }

  function handleCreateProject({ investment }: NewInvestmentFormShape) {
    const formattedData = formatDate(investment)
    actions.setForm(formattedData)
    reset();
    router.push('/Summary');
  }

  return (
    <div className="flex justify-center items-center w-full h-full p-10">
      <FormProvider {...newInvestmentForm}>
        <form onSubmit={handleSubmit(handleCreateProject)}>
          <header className="flex justify-center py-5 text-white font-bold text-lg">Exercise Form</header>
          {fields.map((field, index) => {
            return (
              <FormPanel
                key={field.id}
                index={index}
                remove={remove}
                errors={errors}
              />
            );
          })}
          <ButtonContainer>
            <Button
              type="submit"
              className="text-white bg-slate-600 rounded px-3 py-1"
            >
              Save
            </Button>
            <Button
              type="button"
              onClick={AppendInputs}
              className="text-white bg-slate-600 rounded px-3 py-1"
            >
              Add lines
            </Button>
          </ButtonContainer>
        </form >
      </FormProvider>
    </div>
  )
}
