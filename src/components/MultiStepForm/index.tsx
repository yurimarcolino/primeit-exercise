import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { NewInvestmentFormShape, resolver } from "./schema";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/ui/Button";
import { FormPanel } from "../FormPanel";
import { ButtonContainer } from "@/ui/ButtonContainer";

export function MultiStepForm() {
  const router = useRouter();

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
    const storedData = localStorage.getItem('investment');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      reset({ investment: formatDate(parsedData) });
    }
  }, [reset]);

  function AppendInputs() {
    append({
      startDate: "",
      endDate: "",
      valueType: "",
      amount: "",
    });
  }

  function handleCreateProject({ investment }: NewInvestmentFormShape) {
    const formDate = JSON.stringify(investment);
    // localStorage.setItem("investment", formDate);
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
