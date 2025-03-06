import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem/MenuItem";

const MenuCategory = ({ categoryData, categoryImg, categoryTitle, categoryDetails }) => {
	return (
		<div>
			{categoryTitle && <Cover bgImg={categoryImg} title={categoryTitle} details={categoryDetails}></Cover>}
			<div className="grid md:grid-cols-2 gap-10 mt-15">
				{categoryData.map(menuItem => (
					<MenuItem key={menuItem._id} item={menuItem}></MenuItem>
				))}
			</div>
			{categoryTitle && (
				<div className="w-full flex justify-center">
					<Link to={`/order/${categoryTitle}`}>
						<button className="btn btn-outline btn-lg hover:bg-black hover:text-yellow-400 border-0 hover:border-yellow-400 border-b-4 my-10 inter-font">Order Now</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default MenuCategory;
