import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";

const FoodCard = ({ foodItem }) => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();
	const [,refetch] = useCart();

	const { image, price, recipe, name, _id } = foodItem;

	const handleAddToCart = () => {
		//send cart item to the database
		const cartItem = {
			menuId: _id,
			email: user.email,
			name,
			image,
			price,
		};
		axiosSecure.post("/carts", cartItem).then(res => {
			if (res.data.insertedId) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `${name} added to your cart`,
					showConfirmButton: false,
					timer: 1500,
				});
				refetch()
			}
		});
	};
	return (
		<div className="card bg-base-100 w-96 shadow-sm">
			<figure>
				<img className="w-[370px] h-[247px] object-cover" src={image} alt={name} />
			</figure>
			<p className="bg-slate-900 text-white absolute right-4 top-4 px-4 py-1 rounded-sm">${price}</p>
			<div className="card-body">
				<h2 className="card-title justify-center">{name}</h2>
				<p className="text-sm">{recipe}</p>
				<div className="card-actions justify-center">
					<button onClick={handleAddToCart} className="btn btn-outline hover:bg-black hover:text-yellow-400 border-0 border-b-4 hover:border-yellow-400 mt-4 inter-font">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
