import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featurad from "../Featured/Featurad";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Bistro | Home</title>
                </Helmet>
            </div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featurad></Featurad>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;