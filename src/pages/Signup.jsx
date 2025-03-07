import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Signup = () => {
	const { createUser, updateUser } = useAuth();
	const axiosPublic = useAxiosPublic();
	const navigate = useNavigate();
	const [customError, setCustormError] = useState({});

	const handleSignUp = e => {
		e.preventDefault();
		const form = new FormData(e.target);
		const name = form.get("name");
		const email = form.get("email");
		const photoURL = form.get("photo");
		const password = form.get("password");
		//to create user using firebase
		createUser(email, password)
			.then(() => {
				//to update user info using firebase
				updateUser(name, photoURL)
					.then(() => {
						//after updating, create an object to store information of user in the database
						const userInfo = {
							name: name,
							email: email,
						};
						//storing information of user in the database
						axiosPublic.post("/users", userInfo)
							.then(res => {
								//finally, if inserttion in database is successful, show update to user
								if (res.data.insertedId) {
									Swal.fire({
										position: "top",
										icon: "success",
										title: "Signup successful",
										showConfirmButton: false,
										timer: 2000,
									});
									//navigate automatically to homepage after sign up
									navigate("/");
								}
						});
					})
					.catch(err => {
						setCustormError({ ...err, registerError: err.code });
					});
			})
			.catch(err => {
				setCustormError({ ...err, registerError: err.code });
			});
	};
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col md:flex-row-reverse">
				<div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
					<form onSubmit={handleSignUp} className="card-body">
						<fieldset className="fieldset">
							<label className="fieldset-label">Name</label>
							<input required type="text" name="name" className="input" placeholder="Enter your Name" />
							<label className="fieldset-label">Email</label>
							<input required type="email" name="email" className="input" placeholder="Enter your Email" />
							<label className="fieldset-label">Photo URL</label>
							<input type="url" name="photo" className="input" placeholder="Enter the link to your Photo" />
							<label className="fieldset-label">Password</label>
							<input required type="password" name="password" className="input" placeholder="Enter your Password" />
							{customError && (
								<label className="label mb-2">
									<span className="label-text text-xs text-red-500">{customError.registerError}</span>
								</label>
							)}
							<input type="submit" value="Signup" className="btn btn-neutral mt-4" />
						</fieldset>
						<p className="text-center">
							Already have an account?
							<Link className="text-blue-600" to="/login">
								Login here
							</Link>
						</p>
					</form>
				</div>
				<div className="text-center md:text-left md:w-1/2">
					<h1 className="text-5xl font-bold">Signup now!</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
