import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Category.css"

import slideimg1 from "../../../assets/home/slide1.jpg";
import slideimg2 from "../../../assets/home/slide2.jpg";
import slideimg3 from "../../../assets/home/slide3.jpg";
import slideimg4 from "../../../assets/home/slide4.jpg";
import slideimg5 from "../../../assets/home/slide5.jpg";
const Category = () => {
	return (
		<div>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper mb-24"
			>
				<SwiperSlide>
					<img src={slideimg1} alt="" />
					<h3 className="text-4xl uppercase text-center text-white -mt-16">Salads</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slideimg2} alt="" />
					<h3 className="text-4xl uppercase text-center text-white -mt-16">Pizzas</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slideimg3} alt="" />
					<h3 className="text-4xl uppercase text-center text-white -mt-16">Soups</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slideimg4} alt="" />
					<h3 className="text-4xl uppercase text-center text-white -mt-16">Desserts</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slideimg5} alt="" />
					<h3 className="text-4xl uppercase text-center text-white -mt-16">Salad</h3>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Category;
