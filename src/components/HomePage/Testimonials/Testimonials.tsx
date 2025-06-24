import React from "react";
import Container from "../../reusable/Container/Container";
import { ICONS } from "../../../assets";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";

const Testimonials = () => {
  return (
    <div className=" bg-[#FDF8EE] font-Lato ">
      <Container>
        <div className="py-[50px]">
          <SectionHeading
            title1="Testimonials"
            subtitle="Reviews from our clients."
          />

          <div className="flex gap-[30px] mt-[30px] overflow-x-auto ">
            <div className="bg-[#EFEEEE] rounded-[12px] min-w-[280px] w-[280px] h-[330px] flex flex-col justify-between">
              {/* Top Section */}
              <div>
                <img
                  src={ICONS.fire}
                  alt=""
                  className="size-[50px] mr-2 mb-2"
                />
                <p className="text-black text-center text-xl leading-[30px]">
                  Impressed by the professionalism and attention to details.
                  Impressed by the professionalism and attention to details.
                </p>
              </div>

              {/* Bottom Left Name */}
              <div className="text-right text-sm w-[190px] h-[85px] bg-[#FDF8EE] font-medium text-black py-4 flex flex-row items-center justify-between rounded-tr-[10px] ">
                <div> <img src={ICONS.fire} alt="" className="size-[55px] rounded-full" /></div>
                <div><p >jbjnlkn</p>

                </div>
               
               
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
