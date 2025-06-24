import { Link } from "react-router-dom";
import Container from "../Container/Container";

const GetStartedCTA = () => {
  return (
    <div className="bg-[#D64532F2] p-6">
      <Container>
        <div className="flex flex-col items-center justify-center h-full font-Lato">
          <h1 className="text-[50px] text-[#FDF8EE] leading-[68px] font-semibold text-center mb-[52px]">
            Get Your Business’s Free Audit Done Right Away
          </h1>

          <div className=" w-[760px] h-[68px] flex items-center justify-between px-2 py-1 rounded-full border border-[#FDF8EE]">
            <input
              type="text"
              placeholder="Enter your business link"
              className="bg-transparent text-[#FDF8EE] placeholder-white text-2xl px-3 flex-1 outline-none "
            />
            <Link
              to="/book-a-call"
              className="bg-[#FDF8EE] border border-[#FDF8EE] hover:bg-transparent hover:text-[#FDF8EE]  text-black text-[24px] px-10 py-2 rounded-[36px] shadow transition duration-300 "
            >
              Get Started
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStartedCTA;
