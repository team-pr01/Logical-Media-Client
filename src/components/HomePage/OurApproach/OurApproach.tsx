import { Link } from "react-router-dom";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";
import Container from "../../reusable/Container/Container";
import { ICONS } from "../../../assets";

const OurApproach = () => {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row w-full font-Lato px-4 py-16 gap-12 justify-center items-center">
        {/* Left - 40% */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <div className=" flex flex-row gap-[10px] mb-[6px] justify-start items-center">
            <div className="size-11 rounded-full bg-primary-10 justify-center items-center flex">
              <img
                src={ICONS.fire}
                alt={"Our Approach"}
                className="size-[36px] "
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
          <div>
            <img src={ICONS.fire} alt={"approAch"} className="size-[70px]" />
            <h1 className="text-2xl text-neutral-10 leading-[36px] font-medium mt-4">
              Research-First Thinking
            </h1>
            <p className="text-black text-xl leading-[32px]">
              We dive deep into market trends, audience behaviour, and brand
              positioning before a single idea is pitched.{" "}
            </p>
          </div>
          <div>
            <img src={ICONS.fire} alt={"approAch"} className="size-[70px]" />
            <h1 className="text-2xl text-neutral-10 leading-[36px] font-medium mt-4">
              Logical Planning
            </h1>
            <p className="text-black text-xl leading-[32px]">
             We build structured, scalable strategies rooted in business 
goals  whether you're launching 
a product or scaling your brand
            </p>
          </div>
          <div>
            <img src={ICONS.fire} alt={"approAch"} className="size-[70px]" />
            <h1 className="text-2xl text-neutral-10 leading-[36px] font-medium mt-4">
              Creative Execution
            </h1>
            <p className="text-black text-xl leading-[32px]">
             Our team translates strategy into smart design, compelling content, and high-performing campaigns,
all tailored to stand out.
            </p>
          </div>
          <div>
            <img src={ICONS.fire} alt={"approAch"} className="size-[70px]" />
            <h1 className="text-2xl text-neutral-10 leading-[36px] font-medium mt-4">
             Performance Driven
            </h1>
            <p className="text-black text-xl leading-[32px]">
              We continuously track, analyze, and refine every touchpoint to ensure maximum return on 
every rupee spent.
            </p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </section>
    </Container>
  );
};

export default OurApproach;
