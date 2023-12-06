import React from "react";
import { twMerge } from "tailwind-merge";

interface TextWithIcon {
  icon: React.ReactNode;
  mainText: React.ReactNode;
  subText: React.ReactNode;
  className?: string;
}

const TextWithIcon = ({ icon, mainText, subText, className }: TextWithIcon) => {
  return (
    <div className={twMerge("flex flex-col w-full h-full gap-4", className)}>
      {icon}
      {mainText}
      {subText}
    </div>
  );
};

export default TextWithIcon;
