import React from "react";

interface Props {
  text: string;
}

const Label: React.FC<Props> = ({ text }) => {
  return (
    <div className="bg-[#F0F0F5] rounded-[20px] py-[2px] lg:py-[4px] px-[15px] lg:px-[18px] max-w-max">
      <span className="text-[#7E7D80] text-xs lg:text-sm font-semibold whitespace-nowrap">{text}</span>
    </div>
  );
};

export default Label;
