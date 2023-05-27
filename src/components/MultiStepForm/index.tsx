import { useFieldArray, useForm } from "react-hook-form";
import { NewInvestmentFormShape, resolver } from "./schema";
import { Trash } from "phosphor-react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/formatDate";

// use this example to say that we could use it instead of date-fns library
// const formattedData = parsedData.map((item: any) => {
//   return {
//     ...item,
//     startDate: new Date(item.startDate).toLocaleDateString('en-US'),
//     endDate: new Date(item.endDate).toLocaleDateString('en-US')
//   };
// });

export function MultiStepForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<NewInvestmentFormShape>({
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
    localStorage.setItem("investment", formDate);
    reset();
    router.push('/Summary');
  }

  return (
    <>
      <header className="flex justify-center text-white">Investment form</header>
      <form className="p-5" onSubmit={handleSubmit(handleCreateProject)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <div className="flex flex-col">
                <label className="text-white" htmlFor="interval1">Start date</label>
                <input id="interval1" type="date" {...register(`investment.${index}.startDate`)} />
                {errors.investment?.[index]?.startDate?.message && (
                  <p className="text-red-500">
                    {errors.investment?.[index]?.startDate?.message}
                  </p>
                )}
                <label className="text-white" htmlFor="interval1">End date</label>
                <input id="interval2" type="date" {...register(`investment.${index}.endDate`)} />
                {errors.investment?.[index]?.endDate?.message && (
                  <p className="text-red-500">
                    {errors.investment?.[index]?.endDate?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white" htmlFor="valueType">Value Type:</label>
                <select id="valueType" {...register(`investment.${index}.valueType`)}>
                  <option value="fixed">Fixed</option>
                  <option value="percentage">Percentage</option>
                </select>
                {errors.investment?.[index]?.valueType?.message && (
                  <p className="text-red-500">
                    {errors.investment?.[index]?.valueType?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white" htmlFor="amount">Amount:</label>
                <input type="number" id="amount" {...register(`investment.${index}.amount`)} />
                {errors.investment?.[index]?.amount?.message && (
                  <p className="text-red-500">
                    {errors.investment?.[index]?.amount?.message}
                  </p>
                )}
              </div>
              {index > 0 && (
                <div className="flex justify-between items-center">
                  <p className="w-full border-t border-white" />
                  <Trash
                    size={32}
                    weight="fill"
                    className="text-white"
                    onClick={() => remove(index)}
                  />
                </div>
              )}
            </div>
          )
        })}
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-slate-600 rounded px-3 py-1"
          >
            Save
          </button>
          <button
            type="button"
            onClick={AppendInputs}
            className="text-white bg-slate-600 rounded px-3 py-1"
          >
            Add lines
          </button>
        </div>
      </form>
    </>
  )
}
