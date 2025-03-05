import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
const Banner = () => {
	return (
		<div className="mb-16">
			<Carousel infiniteLoop={true} showThumbs={false}>
				<div className=" h-140 relative">
					<img className="absolute left-0 bottom-0" src={img1} />
				</div>
				<div>
					<img className="h-140 object-cover" src={img2} />
				</div>
				<div>
					<img className="h-140 object-cover" src={img3} />
				</div>
				<div>
					<img className="h-140 object-cover" src={img4} />
				</div>
				<div>
					<img className="h-140 object-cover" src={img5} />
				</div>
				<div>
					<img className="h-140 object-cover" src={img6} />
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
