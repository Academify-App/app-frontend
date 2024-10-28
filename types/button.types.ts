import { ReactElement } from "react";

export interface ButtonProps {
  children: ReactElement;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
}
