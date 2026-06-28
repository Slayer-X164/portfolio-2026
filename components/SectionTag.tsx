import React from "react";

interface SectionTagProps {
  text: string;
  width?: string;
}

export function SectionTag({ text, width }: SectionTagProps) {
  return (
    <div className={`relative flex items-center justify-center h-[38px] ${width ? width : "w-max px-[20px]"}`}>
      <div className="absolute top-[1px] bottom-[1px] left-[1px] right-[1px] bg-primary-light dark:bg-blue-600/15 flex items-center justify-center">
        <span className="text-primary font-sans text-[18px] leading-none whitespace-nowrap">{text}</span>
      </div>
      {/* Top Left */}
      <img src="/assets/corner-tl.svg" className="absolute top-0 left-0 w-[6px] h-[6px]" alt="" />
      {/* Top Right */}
      <img src="/assets/corner-tr.svg" className="absolute top-0 right-0 w-[5px] h-[7px]" alt="" />
      {/* Bottom Left */}
      <img src="/assets/corner-bl.svg" className="absolute bottom-0 left-[0.83px] w-[5px] h-[7px]" alt="" />
      {/* Bottom Right */}
      <img src="/assets/corner-br.svg" className="absolute bottom-0 right-[0.83px] w-[6px] h-[6px]" alt="" />
    </div>
  );
}
