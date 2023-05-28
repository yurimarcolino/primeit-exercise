import { NewInvestmentShape } from '@/components/molecules/MultiStepForm/schema';
import { format } from 'date-fns';

export function formatDate(parsedData: NewInvestmentShape[]) {
  const formattedData = parsedData.map((item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    const startDateFormatted = format(startDate, 'yyyy-MM-dd');
    const endDateFormatted = format(endDate, 'yyyy-MM-dd');

    return {
      ...item,
      startDate: startDateFormatted,
      endDate: endDateFormatted
    };
  });

  return formattedData;
}
