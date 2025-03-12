import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import SectionTitle from "../../components/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("https://seventh-server.vercel.app/reviews")
			.then(res => res.json())
			.then(data => {
				setReviews(data);
			});
	}, []);
	return (
		<section className="my-20">
			<SectionTitle subHeading="What our Clients say" heading="Testimonials"></SectionTitle>
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				{reviews.map(review => (
					<SwiperSlide key={review._id}>
						<div className="flex flex-col items-center my-16 mx-24">
							<Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
							<FaQuoteLeft className="text-5xl mt-3" />
							<p className="pb-4">{review.details}</p>
							<h3 className="text-2xl text-orange-400">{review.name}</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
