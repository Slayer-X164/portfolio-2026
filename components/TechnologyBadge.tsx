import React from "react";

interface TechnologyBadgeProps {
  icon?: string;
  text: string;
  variant?: "large" | "small";
  borderDashed?: boolean;
}

export function TechnologyBadge({ icon, text, variant = "large", borderDashed = true }: TechnologyBadgeProps) {
  if (variant === "small") {
    return (
      <div className="flex items-center justify-center px-[3.8px] py-[3.2px] gap-[2.4px] bg-[#F1F1F1] ">
        {icon && <img src={icon} className="w-[10px] h-[10px]" alt={text} />}
        <span className="font-sans font-medium text-[9.62px] tracking-[0.03em] text-[#84847B]">{text}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center px-[9px] py-[5px] gap-[3.78px] bg-[#F1F1F1] border-[0.63px] border-dashed border-[#8C8C8C]`}>
      {icon && <img src={icon} className="w-[14px] h-[14px]" alt={text} />}
      <span className="font-sans font-medium text-[12px] tracking-[0.03em] text-[#414141]">{text}</span>
    </div>
  );
}
