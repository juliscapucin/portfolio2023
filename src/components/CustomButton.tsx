"use client"

import { CustomButtonProps } from "@/types"

export default function CustomButton({ label, containerStyles, handleClick, buttonType }: CustomButtonProps) {
   return (
      <button disabled={false} type={buttonType} className={`custom-button ${containerStyles}`} onClick={handleClick}>
         <span className={`flex-1`}>{label}</span>
      </button>
   )
}
