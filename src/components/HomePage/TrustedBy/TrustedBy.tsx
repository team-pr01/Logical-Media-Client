import Marquee from "react-fast-marquee";
import { IMAGES } from "../../../assets";
import Container from "../../reusable/Container/Container";

const TrustedBy = () => {
  const logos = [
    IMAGES.partner1,
    IMAGES.partner2,
    IMAGES.partner3,
    IMAGES.partner4,
    IMAGES.partner5,
    IMAGES.partner6,
    IMAGES.partner7,
    IMAGES.partner8,
    IMAGES.partner9,
    IMAGES.partner10,
  ];

  return (
    <Container>
      <div className="font-Lato">
        <h1 className="text-[50px] text-neutral-10 leading-[68px] font-bold text-center mb-[52px]">
          Trusted by
        </h1>
        <Marquee speed={100} gradient={false} pauseOnHover={true}>
          <div className="flex items-center gap-[42px]">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`partner-${index}`}
                className="w-[169px] h-[91px] object-contain"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default TrustedBy;
