import { ICONS } from "../../../assets";

const SolutionsWeOffer = () => {
  return (
    <div className="font-Lato mt-[100px]">
      <h1 className="text-[50px] text-neutral-10 leading-[40px] font-bold text-center">
        Solutions We Offer
      </h1>
      <p className="text-neutral-10 text-2xl leading-[68px] text-center">
        Content Creation Services We Offer Tailored to your Goals
      </p>

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
