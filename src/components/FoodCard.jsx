const FoodCard = ({ foodItem }) => {
	const { image, price, recipe, name } = foodItem;
	return (
		<div className="card bg-base-100 w-96 shadow-sm">
			<figure>
				<img src={image} alt={name} />
			</figure>
            <p className="bg-slate-900 text-white absolute right-4 top-4 px-4 py-1 rounded-sm">${price}</p>
			<div className="card-body">
				<h2 className="card-title justify-center">{name}</h2>
				<p className="text-sm">{recipe}</p>
				<div className="card-actions justify-center">
					<button className="btn btn-primary">Add to card</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
