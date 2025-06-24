import React from "react";
import Container from "../../reusable/Container/Container";
import { ICONS } from "../../../assets";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";

const Testimonials = () => {
  const testimonials = [
  {
    text: "Impressed by the professionalism and attention to details.",
    name: "Ananya Sharma",
    profileImg: ICONS.fire,
    commentIcon: ICONS.comment,
    ratingImg: ICONS.ratings,
  },
  {
    text: "Great work! Timely delivery and high-quality results.",
    name: "Ravi Kumar",
    profileImg: ICONS.fire,
    commentIcon: ICONS.comment,
    ratingImg: ICONS.ratings,
  },
  {
    text: "Amazing experience, will definitely recommend to others.",
    name: "Sneha Patil",
    profileImg: ICONS.fire,
    commentIcon: ICONS.comment,
    ratingImg: ICONS.ratings,
  },
];

  return (
    <div className=" bg-[#FDF8EE] font-Lato ">
      <Container>
        <div className="py-[50px]">
          <SectionHeading
            title1="Testimonials"
            subtitle="Reviews from our clients."
          />

          <div className="flex gap-[30px] mt-[30px] overflow-x-auto ">
            {testimonials.map((item, index) => (
        <div
          key={index}
          className="bg-[#EFEEEE] rounded-[12px] min-w-[280px] w-[280px] min-h-[330px] h-fit flex flex-col justify-between "
        >
          {/* Top Section */}
          <div>
            <img
              src={item.commentIcon}
              alt="comment icon"
              className="size-[50px] mr-2 mb-2"
            />
            <p className="text-black text-center text-xl leading-[30px]">
              {item.text}
            </p>
          </div>

          {/* Bottom Left Name Section */}
          <div className="text-right text-sm w-[190px] h-[85px] bg-[#FDF8EE] font-medium text-black py-4 flex flex-row items-center justify-around rounded-tr-[10px] ">
            <div>
              <img
                src={item.profileImg}
                alt={item.name}
                className="size-[55px] rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-left text-xl leading-[31px]">{item.name}</p>
              <img
                src={item.ratingImg}
                alt="rating"
                className="h-[18px] w-[105px]"
              />
            </div>
          </div>
        </div>
      ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
