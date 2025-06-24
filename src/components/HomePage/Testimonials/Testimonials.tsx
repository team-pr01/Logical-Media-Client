import { ICONS } from "../../../assets";
import SectionHeading from "../../reusable/SectionHeading/SectionHeading";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Impressed by the professionalism and attention to details. Impressed by the professionalism and attention to details.",
      name: "Karla Cooper",
      profileImg: ICONS.avatar1,
      commentIcon: ICONS.comment,
      ratingImg: ICONS.ratings,
    },
    {
      text: "Impressed by the professionalism and attention to details. Impressed by the professionalism and attention to details.",
      name: "Ravi Kumar",
      profileImg: ICONS.avatar2,
      commentIcon: ICONS.comment,
      ratingImg: ICONS.ratings,
    },
    {
      text: "Impressed by the professionalism and attention to details. Impressed by the professionalism and attention to details.",
      name: "Sneha Patil",
      profileImg: ICONS.avatar3,
      commentIcon: ICONS.comment,
      ratingImg: ICONS.ratings,
    },
    {
      text: "Impressed by the professionalism and attention to details. Impressed by the professionalism and attention to details.",
      name: "Ravi Kumar",
      profileImg: ICONS.avatar1,
      commentIcon: ICONS.comment,
      ratingImg: ICONS.ratings,
    },
    {
      text: "Impressed by the professionalism and attention to details. Impressed by the professionalism and attention to details.",
      name: "Sneha Patil",
      profileImg: ICONS.avatar3,
      commentIcon: ICONS.comment,
      ratingImg: ICONS.ratings,
    },
  ];

  return (
    <div className=" bg-[#FDF8EE] font-Lato ">
        <div className="py-[50px] pl-5">
          <SectionHeading
            title1="Testimonials"
            subtitle="Reviews from our clients."
          />

          <div
        className="flex gap-[30px] mt-[30px] overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-4
        scrollbar-hide"
      >
        {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#EFEEEE] rounded-[12px] min-w-[280px] w-[280px] min-h-[330px] h-fit flex flex-col justify-between snap-start"
              >
                {/* Top Section */}
                <div className="pt-[18px] px-2">
                  <img
                    src={item.commentIcon}
                    alt="comment icon"
                    className="size-[50px] mr-2 mb-2"
                  />
                  <p className="text-black text-center text-xl leading-[30px] p">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Left Name Section */}
                <div className="text-right text-sm w-[190px] h-[85px] bg-[#FDF8EE] font-medium text-black py-4 flex flex-row items-center justify-around rounded-tr-[10px]">
                  <div>
                    <img
                      src={item.profileImg}
                      alt={item.name}
                      className="size-[55px] rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-left text-xl leading-[31px]">
                      {item.name}
                    </p>
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
    </div>
  );
};

export default Testimonials;
