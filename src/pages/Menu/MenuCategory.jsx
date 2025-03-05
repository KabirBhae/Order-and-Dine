import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem/MenuItem";

const MenuCategory = ({categoryData, categoryImg, categoryTitle, categoryDetails}) => {
    return (
			<div>
				{categoryTitle && <Cover bgImg={categoryImg} title={categoryTitle} details={categoryDetails}></Cover>}
				<div className="grid md:grid-cols-2 gap-10 my-15">
					{categoryData.map(menuItem => (
						<MenuItem key={menuItem._id} item={menuItem}></MenuItem>
					))}
				</div>
			</div>
		);
};

export default MenuCategory;