import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { ICONS } from "../../../assets";

const GetInTouch = () => {
  return (
    <div className=" px-6 pt-6 pb-10">
      <Container>
        <div className="flex flex-col items-center justify-center h-full font-Lato">
          <h1 className="text-[50px] text-[#FDF8EE] leading-[68px] font-semibold text-center mb-[52px]">
            Get Your Business’s Free Audit Done Right Away
          </h1>

          
            <Link
              to="/book-a-call"
              className="bg-[#FDF8EE] border border-[#FDF8EE] hover:bg-transparent hover:text-[#FDF8EE] text-black text-[24px] px-10 py-2 rounded-[36px] shadow transition duration-300 "
            >
              Get Started
              <img
                                src={ICONS.fire}
                                alt=""
                                className="size-[50px] mr-2 mb-2"
                              />
            </Link>
          
        </div>
      </Container>
    </div>
  );
};

export default GetInTouch;
