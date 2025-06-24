// components/MakeUsDifferentCard.tsx
import React from "react";

interface MakeUsDifferentCardProps {
  icon: string;
  title: string;
  description: string;
}

const MakeUsDifferentCard: React.FC<MakeUsDifferentCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="group bg-[#FDF8EE] hover:bg-gradient-to-b hover:from-[#FDEBE7]/50 hover:to-primary-10 
                 transition-all duration-300 ease-in-out rounded-[8px] w-[270px] h-[322px] py-5 px-2"
    >
      <div className="pt-5 flex flex-col items-center">
        <img src={icon} alt={title} className="size-[70px]" />
        <h1 className="text-[28px] text-primary-10 group-hover:text-[#FDF8EE] leading-[68px] font-[900]">
          {title}
        </h1>
      </div>
      <p className="text-lg text-neutral-10 group-hover:text-[#FDF8EE] leading-[26px] text-center px-1">
        {description}
      </p>
    </div>
  );
};

export default MakeUsDifferentCard;
