import { Link } from "react-router-dom";
import Container from "../../reusable/Container/Container";
import { IoPlayCircleOutline } from "react-icons/io5";
import { ICONS, IMAGES } from "../../../assets";
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from "react";

const Hero = () => {
    const TEXTS = ['Results', 'Conversions', 'Success'];
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Container>
      <div className="flex items-center justify-between font-Lato mt-8">
        {/* Left side */}
        <div className="">
          <h1 className="text-[55px] text-neutral-10 leading-[68px] font-bold max-w-[900px]">
            Smart Strategy, Creative Media, Logical{" "}
            <span className="text-primary-10 inline-block">
                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></span>{" "}
          </h1>
          <p className="text-neutral-10 text-[23px] leading-[57px] mt-[10px]">
            “Blending logic and creativity to craft compelling brand stories.”
          </p>

          <div className="flex items-center gap-[26px] mt-[25px]">
            <Link
              to={"/book-a-call"}
              className="bg-neutral-10 text-[28px] font-Lato px-6 py-3 rounded-[57px] border-2 border-neutral-10 hover:bg-white transition duration-300 text-white hover:text-neutral-10"
            >
              Connect to Us
            </Link>
            <button className="flex items-center gap-2 bg-white text-[28px] font-Lato px-6 py-3 rounded-[57px] border-2 border-primary-10 hover:bg-primary-10 transition duration-300 text-primary-10 hover:text-white cursor-pointer">
              Get A Free Audit
              <IoPlayCircleOutline className="text-[40px]" />
            </button>
          </div>

          <div className="font-Lato flex items-center gap-5 mt-[47px]">
            <div style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }} className="bg-[#2C3E50] p-1 pb-7 rounded-b-3xl rounded-tl-3xl text-white w-[220px]">
              <div className="flex justify-end">
                <img src={ICONS.avatar} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[60px] leading-[68px] font-bold">50+</h1>
                <img src={ICONS.fire} alt="" className="size-[60px" />
              </div>
              <p className="text-xl leading-[22px] font-medium mt-1">
                Organic reach achieved
              </p>
            </div>

            <div className="space-y-[14px]">
              <div style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }} className="bg-[#9AA88D] p-1 pb-6 rounded-b-3xl rounded-tl-3xl text-white w-[220px]">
                <div className="flex justify-end mr-5 mt-3">
                  <img src={ICONS.smileEmoji} alt="" />
                </div>
                <h1 className="text-[60px] leading-0 font-bold mt-3">99%</h1>
                <p className="text-xl leading-[22px] font-medium mt-9">
                  Client satisfaction rate
                </p>
              </div>

              <div style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }} className="bg-[#D46A16] p-1 pb-5 rounded-b-3xl rounded-tl-3xl text-white w-[160px]">
                <div className="flex justify-end mr-5 mt-3">
                  <img src={ICONS.announcement} alt="" />
                </div>
                <h1 className="text-[60px] leading-0 font-bold mt-7">200+</h1>
                <p className="text-sm leading-[22px] font-medium mt-9">
                  Successful campaign
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={IMAGES.heroImg} alt="" />
      </div>
    </Container>
  );
};

export default Hero;
