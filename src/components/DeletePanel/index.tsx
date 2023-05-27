import { Trash } from "phosphor-react";

interface DeletePanelProps {
  remove: (index: number) => void;
  index: number;
}

export function DeletePanel({ remove, index }: DeletePanelProps) {
  return (
    <div className="flex justify-center">
      <Trash
        size={20}
        weight="fill"
        className="text-white cursor-pointer hover:text-red-500"
        onClick={() => remove(index)}
      />
    </div>
  );
}
