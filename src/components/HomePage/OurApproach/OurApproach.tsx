import { Link } from "react-router-dom";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";
import Container from "../../reusable/Container/Container";
import { ICONS } from "../../../assets";

const OurApproach = () => {
  const approachData = [
  {
    title: "Research-First Thinking",
    description:
      "We dive deep into market trends, audience behaviour, and brand positioning before a single idea is pitched.",
    icon: ICONS.approach1,
  },
  {
    title: "Logical Planning",
    description:
      "We build structured, scalable strategies rooted in business goals whether you're launching a product or scaling your brand.",
    icon: ICONS.approach2,
  },
  {
    title: "Creative Execution",
    description:
      "Our team translates strategy into smart design, compelling content, and high-performing campaigns, all tailored to stand out.",
    icon: ICONS.approach3,
  },
  {
    title: "Performance Driven",
    description:
      "We continuously track, analyze, and refine every touchpoint to ensure maximum return on every rupee spent.",
    icon: ICONS.approach4,
  },
];
  return (
    <Container>
      <section className="flex flex-col lg:flex-row w-full font-Lato px-4 py-16 gap-12 justify-center items-center">
        {/* Left - 40% */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <div className=" flex flex-row gap-[10px] mb-[6px] justify-start items-center">
            <div className="size-11 rounded-full bg-primary-10 justify-center items-center flex">
              <img
                src={ICONS.ourApproach}
                alt={"Our Approach"}
                className="size-[36px]"
              />
            </div>
            <h1 className="text-[28px] text-neutral-10 leading-[27px] font-medium">
              Our Approach
            </h1>
          </div>
          <SectionHeading
            title1="The"
            popup="Logical "
            title2="Way Forward"
            className="text-left "
          />
          <p className="text-neutral-10 text-2xl leading-[36px]">
            Our approach blends the art of storytelling with the science of
            systems creating work that not only looks good but works
            brilliantly..
          </p>
          <Link
            to="/learn-more"
            className="bg-transparent hover:bg-primary-10 text-primary-10 hover:text-white px-6 p-[10px] rounded-md w-fit transition  border-2 border-primary-10 mt-6 text-2xl font-medium leading-[30px] "
          >
            Learn More
          </Link>
        </div>

        {/* Right - 60% */}
        <div className="w-full lg:w-[60%] grid grid-cols-2  gap-11">
          {approachData.map((item, index) => (
        <div key={index} className="flex flex-col items-start">
          <img src={item.icon} alt={item.title} className="w-[74px] h-[54px] " />
          <h1 className="text-2xl text-neutral-10 leading-[36px] font-medium mt-4">
            {item.title}
          </h1>
          <p className="text-black text-xl leading-[32px] mt-2">
            {item.description}
          </p>
        </div>
      ))}
          {/* Add more cards as needed */}
        </div>
      </section>
    </Container>
  );
};

export default OurApproach;
