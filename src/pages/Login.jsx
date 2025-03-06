import { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
	const { signInUser } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	let loginString = "Login now!";
	if (location.state) loginString = "Login to continue";

	const [customError, setCustormError] = useState({});

	const handleLogin = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signInUser(email, password)
			.then(() => {
				Swal.fire({
					position: "top",
					icon: "success",
					title: "Login successful",
					showConfirmButton: false,
					timer: 2000,
				});
				navigate(location?.state ? location.state : "/");
			})
			.catch(err => {
				setCustormError({ ...err, registerError: err.code });
			});
	};
	//for captcha related functionalities
	useEffect(() => loadCaptchaEnginge(4), []);
	const [inputDisabled, setInputDisabled] = useState(true);
	const captchaRef = useRef(null);
	const handleValidateCaptcha = e => {
		e.preventDefault();
		const captchaValue = captchaRef.current.value;
		if (validateCaptcha(captchaValue)) {
			setInputDisabled(false);
		} else {
			setInputDisabled(true);
		}
	};
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col md:flex-row-reverse">
				<div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
					<form onSubmit={handleLogin} className="card-body">
						<fieldset className="fieldset">
							<label className="fieldset-label">Email</label>
							<input required type="email" name="email" className="input" placeholder="Email" />
							<label className="fieldset-label">Password</label>
							<input required type="password" name="password" className="input" placeholder="Password" />
							<div>
								<a className="link link-hover">Forgot password?</a>
							</div>
							<label className="fieldset-label">
								<LoadCanvasTemplate />
							</label>
							<input ref={captchaRef} type="text" name="captcha" className="input" placeholder="Type the above text here" />
							<button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">
								Validate Captcha
							</button>
							{customError && (
								<label className="label mb-2">
									<span className="label-text text-xs text-red-500">{customError.registerError}</span>
								</label>
							)}
							<input disabled={inputDisabled} type="submit" value="Login" className="btn btn-neutral mt-4" />
						</fieldset>
						<p className="text-center">
							New Here?{" "}
							<Link className="text-blue-600" to="/signup">
								Create an account
							</Link>
						</p>
					</form>
				</div>
				<div className="text-center md:text-left md:w-1/2">
					<h1 className="text-5xl font-bold">{loginString}</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
