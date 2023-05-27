import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export interface NewInvestmentShape {
  startDate: string;
  endDate: string;
  valueType: string;
  amount: string;
}

export interface NewInvestmentFormShape {
  investment: NewInvestmentShape[];
}

const isEndDateValid = (endDate: Date, { startDate }: { startDate: Date }): boolean => {
  return endDate >= startDate;
};

const schema = zod.object({
  investment: zod.array(
    zod.object({
      startDate: zod
        .coerce.date()
        .refine((date) => date !== null, "Start date is required")
        .refine((date) => date >= new Date(), "Start date must be greater than or equal to today"),
      endDate: zod
        .coerce
        .date()
        .refine((date) => date !== null, "End date is required"),
      valueType: zod
        .coerce
        .string()
        .min(1, "Required"),
      amount: zod
        .coerce
        .string()
        .min(1, "Required"),
    }).refine((data) => data.endDate > data.startDate, { message: "End date must be greater than start date.", path: ["endDate"] })
  ),
});

export const resolver = zodResolver(schema);
