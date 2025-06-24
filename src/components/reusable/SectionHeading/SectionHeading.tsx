import React from "react";

interface SectionHeadingProps {
  title1: string;
  popup?: string;
  title2?: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title1,
  subtitle,
  title2,
  popup,
  className,
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-[50px] text-neutral-10 leading-[60px] font-bold mb-4">
        {title1}{ " "}
        <span className="text-primary-10">{popup}</span>{" "}
        {title2}
      </h1>
      <p className="text-neutral-10 text-2xl leading-[68px]">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
