import Cover from "../shared/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

import menuImg from "../../assets/menu/menu-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
	const [menu] = useMenu();
	//category data
	const desserts = menu.filter(item => item.category === "dessert");
	const pizzas = menu.filter(item => item.category === "pizza");
	const salads = menu.filter(item => item.category === "salad");
	const soups = menu.filter(item => item.category === "soup");
	const todayOffers = menu.filter(item => item.category === "offered");

	//random details
	const dessertDetails = "Indulge in our heavenly desserts, crafted to satisfy your sweet cravings. From rich chocolate delights to refreshing fruity treats, each bite offers a perfect balance of flavor and texture. Treat yourself to pure bliss today!";
	const pizzaDetails = "Our delicious pizzas are made with fresh ingredients, a crispy crust, rich tomato sauce, and gooey cheese. Enjoy classic favorites or unique toppings, baked to perfection for a flavorful experience. Perfect for any meal or gathering!";
	const saladDetails = "Our fresh, vibrant salads are a perfect blend of crisp greens, juicy vegetables, and delicious dressings. Whether you prefer classic Caesar or a refreshing Mediterranean mix, each bite is packed with flavor and nutrition.";
	const soupDetails = "Warm up with our hearty, flavorful soups, made from the freshest ingredients and rich, aromatic spices. From classic comfort bowls to bold, exotic flavors, our soups are the perfect start to a delicious meal.";
	return (
		<div>
			<Cover bgImg={menuImg} title="our menu"></Cover>
			<SectionTitle subHeading={"Don't miss"} heading={"today's offer"}></SectionTitle>
			<MenuCategory categoryData={todayOffers}></MenuCategory>
			<MenuCategory categoryData={desserts} categoryImg={dessertImg} categoryTitle={"Desserts"} categoryDetails={dessertDetails}></MenuCategory>
			<MenuCategory categoryData={pizzas} categoryImg={pizzaImg} categoryTitle={"Pizzas"} categoryDetails={pizzaDetails}></MenuCategory>
			<MenuCategory categoryData={salads} categoryImg={saladImg} categoryTitle={"Salads"} categoryDetails={saladDetails}></MenuCategory>
			<MenuCategory categoryData={soups} categoryImg={soupImg} categoryTitle={"Soups"} categoryDetails={soupDetails}></MenuCategory>
		</div>
	);
};

export default Menu;
