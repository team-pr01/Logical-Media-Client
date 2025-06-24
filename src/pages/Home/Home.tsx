import Hero from "../../components/HomePage/Hero/Hero";
import SolutionsWeOffer from "../../components/HomePage/SolutionsWeOffer/SolutionsWeOffer";
import TrustedBy from "../../components/HomePage/TrustedBy/TrustedBy";

const Home = () => {
    return (
        <div>
            <Hero/>
            <TrustedBy/>
            <SolutionsWeOffer/>
        </div>
    );
};

export default Home;