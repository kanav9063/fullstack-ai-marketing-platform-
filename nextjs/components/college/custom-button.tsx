import { Button } from "@/components/ui/button";
import { type ButtonProps } from "@/components/ui/button";

interface CollegeButtonProps extends ButtonProps {
  // Add any additional props specific to your college button
  isHighlight?: boolean;
}

export function CollegeButton({
  children,
  isHighlight = false,
  className = "",
  ...props
}: CollegeButtonProps) {
  return (
    <Button
      className={`${className} ${
        isHighlight ? "bg-blue-600 hover:bg-blue-700" : ""
      }`}
      {...props}
    >
      {children}
    </Button>
  );
}
