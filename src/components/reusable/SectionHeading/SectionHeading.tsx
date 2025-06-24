import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-[50px] text-neutral-10 leading-[40px] font-bold mb-4">
        {title}
      </h1>
      <p className="text-neutral-10 text-2xl leading-[68px]">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
