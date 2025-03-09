import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../shared/Cover";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import { useParams } from "react-router-dom";
import "./Order.css"

const Order = () => {
	const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
	const { category } = useParams();
	const catIndex = categories.indexOf(category);
	const [tabIndex, setTabIndex] = useState(catIndex);
	const [menu] = useMenu();
	//category data
	const desserts = menu.filter(item => item.category === "dessert");
	const pizzas = menu.filter(item => item.category === "pizza");
	const salads = menu.filter(item => item.category === "salad");
	const soups = menu.filter(item => item.category === "soup");
	const drinks = menu.filter(item => item.category === "drinks");

	return (
		<div>
			<Cover bgImg={orderCoverImg} title={"Order Food"} details={"Would you like to try a dish?"}></Cover>
			<Tabs style={{marginTop: "20px"}} defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
				<TabList>
					<Tab>Salads</Tab>
					<Tab>Pizzas</Tab>
					<Tab>Soups</Tab>
					<Tab>Desserts</Tab>
					<Tab>Drinks</Tab>
				</TabList>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{salads.map(item => (
							<FoodCard key={item._id} foodItem={item}></FoodCard>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{pizzas.map(item => (
							<FoodCard key={item._id} foodItem={item}></FoodCard>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{soups.map(item => (
							<FoodCard key={item._id} foodItem={item}></FoodCard>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{desserts.map(item => (
							<FoodCard key={item._id} foodItem={item}></FoodCard>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid md:grid-cols-3 gap-10">
						{drinks.map(item => (
							<FoodCard key={item._id} foodItem={item}></FoodCard>
						))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Order;
