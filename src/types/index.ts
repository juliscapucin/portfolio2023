import { MouseEventHandler } from "react";

export interface CustomButtonProps {
   label: string;
   containerStyles?: string;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
   buttonType?: "button" | "submit"
}