import { ICONS } from "../../../assets";
import Container from "../../reusable/Container/Container";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";
import MakeUsDifferentCard from "./MakeUsDifferentCard";

const MakeUsDifferent = () => {
  const cardData = [
  {
    icon: ICONS.campaignStrategy, // Replace with the actual icon path
    title: "Campaign Strategy",
    description:
      "At Logical Media, we don’t believe in one-size-fits-all campaigns. Every brand has a unique story — and we’re here to tell it with flair, focus, and measurable impact.",
  },
  {
    icon: ICONS.creativity,
    title: "Creativity",
    description:
      "Bold ideas. Smart execution. Custom campaigns that get noticed — and get results. We mix logic with flair to build brands that stand out and scale up.",
  },
  {
    icon: ICONS.community,
    title: "5L+ Community",
    description:
      "Expanding reach through engaged audiences. With meaningful engagement and consistent value delivery, we turn reach into lasting impact & campaigns creative.",
  },
  {
    icon: ICONS.ourTeam,
    title: "Our Core Team",
    description:
      "Experts delivering creativity and results. Our experts combine creative insight with strategic thinking to drive real results, ensuring every project is imaginative.",
  },
];
  return (
    <div className="font-Lato my-[100px]">
      <Container>
        <SectionHeading
          title1="What Makes Us Different"
          subtitle="“Because Logic, Media and Results Belong Together.”"
        />
        <div className="flex gap-[30px] mt-[42px] justify-center flex-wrap">
          {cardData.map((card, index) => (
            <MakeUsDifferentCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MakeUsDifferent;
