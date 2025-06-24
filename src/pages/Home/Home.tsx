import Hero from "../../components/HomePage/Hero/Hero";
import MakeUsDifferent from "../../components/HomePage/MakeUsDifferent/MakeUsDifferent";
import OurApproach from "../../components/HomePage/OurApproach/OurApproach";
import SolutionsWeOffer from "../../components/HomePage/SolutionsWeOffer/SolutionsWeOffer";
import TrustedBy from "../../components/HomePage/TrustedBy/TrustedBy";
import GetStartedCTA from "../../components/reusable/GetStartedCTA.tsx/GetStartedCTA";

const Home = () => {
    return (
        <div>
            <Hero/>
            <TrustedBy/>
            <SolutionsWeOffer/>
            <GetStartedCTA/>
            <MakeUsDifferent/>
            <OurApproach/> 
        </div>
    );
};

export default Home;