"use client"

import Image from "next/image"

type CustomButtonProps = {
 title: string
 onClick: () => void
 containerStyles?: string
 buttonType?: "button" | "submit"
 textStyles?: string
 rightIcon?: string
 handleClick?: () => void
}

export default function CustomButton({
 title,
 onClick,
 containerStyles,
 textStyles,
 buttonType,
 rightIcon,
 handleClick,
}: CustomButtonProps) {
 return (
  <button
   disabled={false}
   type={buttonType || "button"}
   className={"custom-btn"}
   onClick={handleClick}>
   <span className={`flex-1 ${textStyles}`}>title</span>
  </button>
 )
}
