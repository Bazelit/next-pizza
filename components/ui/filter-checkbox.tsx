import { Checkbox } from "@heroui/checkbox";

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={`checkbox-${String(name)}-${String(value)}`}
        isSelected={checked}
        value={value}
        onValueChange={onCheckedChange}
      />
      <label
        className="leading-none cursor-pointer flex-1"
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
