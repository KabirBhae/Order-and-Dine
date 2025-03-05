import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem/MenuItem";

const MenuCategory = ({ categoryData, categoryImg, categoryTitle, categoryDetails }) => {
	return (
		<div>
			{categoryTitle && <Cover bgImg={categoryImg} title={categoryTitle} details={categoryDetails}></Cover>}
			<div className="grid md:grid-cols-2 gap-10 my-15">
				{categoryData.map(menuItem => (
					<MenuItem key={menuItem._id} item={menuItem}></MenuItem>
				))}
			</div>
			{categoryTitle && (
				<Link to={`/order/${categoryTitle}`}>
					<button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
				</Link>
			)}
		</div>
	);
};

export default MenuCategory;
