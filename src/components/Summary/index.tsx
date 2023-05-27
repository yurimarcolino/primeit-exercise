import { formatDate } from "@/utils/formatDate";
import { NewInvestmentShape } from "../MultiStepForm/schema";

export function Summary() {
  const storedData = localStorage.getItem('investment');
  const formDataArray: NewInvestmentShape[] = storedData ? JSON.parse(storedData) : [];

  return (
    <div>
      <h1>Summary</h1>
      {formatDate(formDataArray).map((formData, index) => (
        <div key={index}>
          <p>Start Date: {formData.startDate}</p>
          <p>End Date: {formData.endDate}</p>
          <p>Value Type: {formData.valueType}</p>
          <p>Amount: {formData.amount}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
