import { Input } from "@/components/ui/input";
import { type InputProps } from "@/components/ui/input";

interface CollegeInputProps extends Omit<InputProps, "type"> {
  label?: string;
  error?: string;
  type?: string;
}

export function CollegeInput({
  label,
  error,
  className = "",
  type = "text",
  ...props
}: CollegeInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <Input
        type={type}
        className={`${className} ${error ? "border-red-500" : ""}`}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
