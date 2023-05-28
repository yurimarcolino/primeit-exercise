import { formatDate } from "./formatDate";
import { NewInvestmentShape } from "@/components/molecules/MultiStepForm/schema";

describe("formatDate", () => {
  it("should format the dates correctly", () => {
    const parsedData: NewInvestmentShape[] = [
      {
        startDate: "2023-05-01",
        endDate: "2023-05-31",
        valueType: "Type A",
        amount: "100",
      },
      {
        startDate: "2023-06-01",
        endDate: "2023-06-30",
        valueType: "Type B",
        amount: "200",
      },
    ];

    const formattedData = formatDate(parsedData);

    expect(formattedData).toEqual([
      {
        startDate: "2023-05-01",
        endDate: "2023-05-31",
        valueType: "Type A",
        amount: "100",
      },
      {
        startDate: "2023-06-01",
        endDate: "2023-06-30",
        valueType: "Type B",
        amount: "200",
      },
    ]);
  });
});
