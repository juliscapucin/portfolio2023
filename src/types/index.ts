import { MouseEventHandler } from "react";

interface HeaderProps {
   label: string;
   slug: string;
}

export interface CustomButtonProps {
   label: string;
   containerStyles?: string;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
   buttonType?: "button" | "submit"
}