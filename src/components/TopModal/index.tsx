import React from "react";
import IconClose from "../../assets/icons/closeIcon.svg";


interface Props {
  text: string;
  setShow: (value: React.SetStateAction<boolean>) => void
}

const TopModal: React.FC<Props> = ({ text, setShow }) => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between px-5 h-[60px]">
        <span className="text-[#00000022] text-base lg:text-[20px] font-bold">
          {text}
        </span>
        <img
          onClick={() => setShow(false)}
          className="cursor-pointer"
          src={IconClose}
          alt="close"
        />
      </div>
      <div className="h-[0.6px] w-full bg-[#00000022]" />
    </div>
  );
};

export default TopModal;
