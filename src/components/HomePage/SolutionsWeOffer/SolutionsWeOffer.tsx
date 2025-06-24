import { ICONS } from "../../../assets";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";

const SolutionsWeOffer = () => {
  return (
    <div className="font-Lato my-[100px]">
      <SectionHeading
  title="Solutions We Offer"
  subtitle="Content Creation Services We Offer Tailored to your Goals"
/>

      <div className="flex gap-[30px] mt-[42px]">
        <div className="bg-[#FDF8EE] hover:bg-gradient-to-b hover:from-[#FDEBE7]/50 hover:to-[#F5C7C0] 
            transition-all duration-300 ease-in-out border border-[#7A7A7A] rounded-[10px] w-[350px] h-[476px]">
          <div className="pt-5 px-[30px]">
            <img src={ICONS.fire} alt="" className="size-[74px]" />
            <h1 className="text-[40px] text-neutral-10 leading-[22px] font-semibold mt-5">
              Marketing
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsWeOffer;
