import { NewInvestmentShape } from "@/components/molecules/MultiStepForm/schema";

interface SummaryTableProps {
  props: NewInvestmentShape[];
}

export function SummaryTable({ props }: SummaryTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-2 text-white font-bold">Start Date</th>
          <th className="p-2 text-white font-bold">End Date</th>
          <th className="p-2 text-white font-bold">Value Type</th>
          <th className="p-2 text-white font-bold">Amount</th>
        </tr>
      </thead>
      <tbody>
        {props.map((item, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
          >
            <td className="p-2">{item.startDate}</td>
            <td className="p-2">{item.endDate}</td>
            <td className="p-2">{item.valueType}</td>
            <td className="p-2">{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
