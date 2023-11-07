import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images1 from '../../../assets/home/01.jpg';
import images2 from '../../../assets/home/02.jpg';
import images3 from '../../../assets/home/03.png';
import images4 from '../../../assets/home/04.jpg';
import images5 from '../../../assets/home/05.png';
import images6 from '../../../assets/home/06.png';
const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={images1} />
            </div>
            <div>
                <img src={images2} />
            </div>
            <div>
                <img src={images3} />
            </div>
            <div>
                <img src={images4} />
            </div>
            <div>
                <img src={images5} />
            </div>
            <div>
                <img src={images6} />
            </div>
        </Carousel>
    );
};

export default Banner;