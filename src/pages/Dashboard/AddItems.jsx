import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
	const { register, handleSubmit, reset } = useForm();
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();
	const onSubmit = async data => {
		//creating an image object
		const imageFile = { image: data.image[0] };
		Swal.fire({
			title: "Processing...",
			text: "Please wait while the data is uploaded",
			icon: "info",
			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false,
			showConfirmButton: false, // Hides confirm button
			timer: 3500, // Set the total time (in milliseconds)
			timerProgressBar: true, // Enables the progress bar
		});
		// sending the image to imgbb. A bit unique syntax for uploading image
		const res = await axiosPublic.post(image_hosting_api, imageFile, {
			headers: {
				"content-type": "multipart/form-data",
			},
		});
		if (res.data.success) {
			// now send the menu item data to the server with the image url
			const menuItem = {
				name: data.name,
				category: data.category,
				price: parseFloat(data.price),
				recipe: data.recipe,
				image: res.data.data.display_url,
			};
			//
			const menuRes = await axiosSecure.post("/menu", menuItem);
			if (menuRes.data.insertedId) {
				// show success popup
				reset();
				Swal.fire({
					icon: "success",
					title: `${data.name} is added to the menu.`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		}
		// console.log("with image url", res.data);
	};

	return (
		<div>
			<SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-control w-full my-4">
						<label className="label">
							<span className="label-text">Item Name*</span>
						</label>
						<input type="text" placeholder="Item Name" {...register("name", { required: true })} required className="input input-bordered mt-2 w-full" />
					</div>
					<div className="flex gap-6">
						{/* category */}
						<div className="form-control w-full my-4">
							<label className="label">
								<span className="label-text">Category*</span>
							</label>
							<select defaultValue="default" {...register("category", { required: true })} className="select select-bordered mt-2 w-full">
								<option disabled value="default">
									Select a category
								</option>
								<option value="popular">Popular</option>
								<option value="salad">Salad</option>
								<option value="pizza">Pizza</option>
								<option value="soup">Soup</option>
								<option value="dessert">Dessert</option>
								<option value="drinks">Drinks</option>
							</select>
						</div>

						{/* price */}
						<div className="form-control w-full my-4">
							<label className="label">
								<span className="label-text">Price*</span>
							</label>
							<input type="number" step="0.01" min="0" placeholder="Price" {...register("price", { required: true })} className="input input-bordered mt-2 w-full" />
						</div>
					</div>
					{/* recipe details */}
					<div className="form-control w-full my-4">
						<label className="label">
							<span className="label-text">Recipe Details</span>
						</label>
						<textarea {...register("recipe")} className="textarea textarea-bordered mt-2 w-full" placeholder="Enter details of the recipe"></textarea>
					</div>

					<div className="form-control w-full my-6">
						<input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
					</div>

					<button className="btn">
						Add Item <FaUtensils className="ml-4"></FaUtensils>
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddItems;
