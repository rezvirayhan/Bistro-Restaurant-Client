import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import selider1 from "../../../assets/home/slide1.jpg";
import selider2 from "../../../assets/home/slide2.jpg";
import selider3 from "../../../assets/home/slide3.jpg";
import selider4 from "../../../assets/home/slide4.jpg";
import selider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section>
            <SectionTitle
                subHedding={"From 11.00 am to 10.00 pm"}
                hedding={"Go To Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={selider1} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={selider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={selider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={selider4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={selider5} alt="" />
                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default Category;