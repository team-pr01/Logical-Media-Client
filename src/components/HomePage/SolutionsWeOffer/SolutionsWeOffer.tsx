import { ICONS, IMAGES } from "../../../assets";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";

const SolutionsWeOffer = () => {
  const solutions = [
    {
      image: IMAGES.marketing,
      icon: ICONS.marketingIcon,
      title: "Marketing",
    },
    {
      image: IMAGES.development,
      icon: ICONS.developmentIcon,
      title: "Development",
    },
    {
      image: IMAGES.contentProduction,
      icon: ICONS.contentProductionIcon,
      title: "Content Production",
    },
    {
      image: IMAGES.aiAutomation,
      icon: ICONS.aiAutomationIcon,
      title: "AI Automation",
    },
    {
      image: IMAGES.contentCreation,
      icon: ICONS.contentCreationIcon,
      title: "Content Creation",
    },
  ];

  return (
    <div className="font-Lato my-[100px] pl-10">
      <SectionHeading
  title1="Solutions We Offer"
  subtitle="Content Creation Services We Offer Tailored to your Goals"
/>

      <div
        className="flex gap-[30px] mt-[42px] overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-4
        scrollbar-hide"
      >
        {solutions.map((data, index) => (
          <div
            key={index}
            className="bg-[#FDF8EE] hover:bg-gradient-to-b hover:from-[#FDEBE7]/50 hover:to-[#F5C7C0]
              transition-all duration-300 ease-in-out border border-[#7A7A7A] rounded-[10px]
              w-[350px] h-[476px] flex-shrink-0 flex flex-col justify-between snap-start"
          >
            <div className="pt-4 px-[15px]">
              <img src={data.icon} alt="" className="size-[74px]" />
              <h1 className="text-[35px] text-neutral-10 leading-[22px] font-semibold mt-5">
                {data.title}
              </h1>
            </div>
            <img src={data.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsWeOffer;
