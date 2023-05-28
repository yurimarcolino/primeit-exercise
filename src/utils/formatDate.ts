import { NewInvestmentShape } from "@/components/molecules/MultiStepForm/schema";

export function formatDate(parsedData: NewInvestmentShape[]) {
  const formattedData = parsedData.map((item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    const startDateFormatted = startDate.toISOString().split("T")[0];
    const endDateFormatted = endDate.toISOString().split("T")[0];

    return {
      ...item,
      startDate: startDateFormatted,
      endDate: endDateFormatted,
    };
  });

  return formattedData;
}
