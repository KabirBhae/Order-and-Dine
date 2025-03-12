import SectionTitle from "../../../components/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
import { NavLink } from "react-router-dom";
const Featured = () => {
	return (
		<div className="featured-item text-white bg-fixed pt-8 my-16">
			<SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
			<div className="md:flex justify-center items-center pb-20 py-12 px-36">
				<div>
					<img src={featureImg} alt="" />
				</div>
				<div className="md:ml-10 inter-font">
					<p>Aug 20, 2026</p>
					<p className="uppercase mt-2">where can I get some?</p>
					<p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum mollitia qui labore ut doloribus, ducimus neque nobis cupiditate nisi. Atque rerum, tenetur aperiam perspiciatis aut aspernatur quae odit quo.</p>
					<button className="btn btn-outline border-0 border-b-4 mt-4">
						<NavLink to="/order">Order Now</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
