import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
	const { googleSignIn } = useAuth();
	const axiosPublic = useAxiosPublic();
	const navigate = useNavigate();
	const location = useLocation();
	//if noHeaderFooter is true, then don't load navbar and footer
	let googleButtonText = "Login";

	if (location.pathname.includes("signup")) {
		googleButtonText = "Signup";
	}

	const handleGoogleSignIn = e => {
		e.preventDefault();
		googleSignIn().then(result => {
			const userInfo = {
				email: result.user?.email,
				name: result.user?.displayName,
			};
			axiosPublic.post("/users", userInfo).then(res => {
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
				} else {
					Swal.fire({
						position: "top",
						icon: "success",
						title: "Login successful",
						showConfirmButton: false,
						timer: 2000,
					});
				}
				navigate(location?.state ? location.state : "/");
			});
		});
	};

	return (
		<div>
			<div className="divider m-1">OR</div>

			<button onClick={handleGoogleSignIn} className="btn btn-ghost w-full">
				<FaGoogle></FaGoogle> {googleButtonText} with Google
			</button>
		</div>
	);
};

export default SocialLogin;
