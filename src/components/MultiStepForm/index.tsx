import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { NewInvestmentFormShape, resolver } from "./schema";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@/ui/Button";
import { FormPanel } from "../FormPanel";
import { ButtonContainer } from "@/ui/ButtonContainer";
import { useFormStore } from "@/context/formStore";
import { formatDate } from "@/utils/formatDate";
import { Header } from "@/ui/Header";

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

  function appendInputs() {
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
    router.push('/summary');
  }

  return (
    <div className="flex justify-center items-center w-full h-full p-10">
      <FormProvider {...newInvestmentForm}>
        <form onSubmit={handleSubmit(handleCreateProject)}>
          <Header title="Exercise Form" />
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
            <Button type="submit">Save</Button>
            <Button type="button" onClick={appendInputs}>Add lines</Button>
          </ButtonContainer>
        </form >
      </FormProvider>
    </div>
  )
}
