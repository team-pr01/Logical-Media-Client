import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { ICONS } from "../../../assets";

const GetInTouch = () => {
  const getInTouchData = [
    { title: "Data-Driven Insights" },
    { title: "Creative Campaigns" },
    { title: "ROI Focused Execution" },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-full font-Lato py-[100px]">
        <h1 className="text-[50px] text-black leading-[58px] font-semibold text-center mb-[32px]">
          Want to Scale your Business with Our Content Creation Services?
        </h1>

        <Link
          to="/book-a-call"
          className="bg-primary-10 border-2 border-primary-10 hover:bg-transparent hover:text-primary-10 text-[#FDF8EE] text-[24px] px-[14px] h-[59px] py-2 rounded-full flex transition duration-300 justify-center items-center gap-2"
        >
          Get In Touch
          <img src={ICONS.whatsapp} alt="" className="size-[50px]" />
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center mt-[40px] w-full">
          {getInTouchData.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <img src={ICONS.tick} alt="" className="size-[30px] " />
              <h1 className="text-[24px] text-black leading-[30px] font-medium">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default GetInTouch;
