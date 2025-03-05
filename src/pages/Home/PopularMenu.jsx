import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../shared/MenuItem/MenuItem";

const PopularMenu = () => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		fetch("menu.json")
			.then(res => res.json())
			.then(data => {
				const popularItems = data.filter(item => item.category === "popular");
				setMenu(popularItems);
			});
	}, []);
	return (
		<section className="mb-16">
			<SectionTitle heading="From our menu" subHeading="Popular Items"></SectionTitle>
			<div className="grid md:grid-cols-2 gap-10 mt-15">
				{menu.map(menuItem => (
					<MenuItem key={menuItem._id} item={menuItem}></MenuItem>
				))}
			</div>
		</section>
	);
};

export default PopularMenu;
