import "./MenuItem.css"
const MenuItem = ({ item }) => {
	const { image, price, recipe, name } = item;
	return (
		<div className="flex space-x-4">
			<img style={{ borderRadius: "0 200px 200px 200px" }} className="w-[120px] h-[100px]" src={image} alt="" />
			<div>
				<h3 className="uppercase mb-2 chinzel-name">{name} ---------------</h3>
				<p className="inter-recipe">{recipe}</p>
			</div>
			<p className="text-yellow-500">${price}</p>
		</div>
	);
};

export default MenuItem;
