import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
	const [menu] = useMenu();
	const popularMenu = menu.filter(item => item.category === "popular");
	return (
		<section className="mb-16">
			<SectionTitle heading="From our menu" subHeading="Popular Items"></SectionTitle>
			<div className="grid md:grid-cols-2 gap-10 mt-15">
				{popularMenu.map(menuItem => (
					<MenuItem key={menuItem._id} item={menuItem}></MenuItem>
				))}
			</div>
		</section>
	);
};

export default PopularMenu;
