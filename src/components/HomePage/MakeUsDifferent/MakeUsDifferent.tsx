import { ICONS } from "../../../assets";
import Container from "../../reusable/Container/Container";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";
import MakeUsDifferentCard from "./MakeUsDifferentCard";

const MakeUsDifferent = () => {
  return (
    <div className="font-Lato my-[100px]">
      <Container>
        <SectionHeading
          title1="What Makes Us Different"
          subtitle="“Because Logic, Media and Results Belong Together.”"
        />
        <div className="flex gap-[30px] mt-[42px] justify-center flex-wrap">
          <MakeUsDifferentCard
            icon={ICONS.fire}
            title="Marketing"
            description="We create compelling marketing content that drives engagement and conversions, tailored to your brand's unique voice and goals."
          />
           <MakeUsDifferentCard
            icon={ICONS.fire}
            title="Marketing"
            description="We create compelling marketing content that drives engagement and conversions, tailored to your brand's unique voice and goals."
          />
           <MakeUsDifferentCard
            icon={ICONS.fire}
            title="Marketing"
            description="We create compelling marketing content that drives engagement and conversions, tailored to your brand's unique voice and goals."
          />
           <MakeUsDifferentCard
            icon={ICONS.fire}
            title="Marketing"
            description="We create compelling marketing content that drives engagement and conversions, tailored to your brand's unique voice and goals."
          />
        </div>
      </Container>
    </div>
  );
};

export default MakeUsDifferent;
