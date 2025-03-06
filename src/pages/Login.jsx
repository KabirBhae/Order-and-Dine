import { useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
const Login = () => {
	useEffect(() => loadCaptchaEnginge(4),[])
	const [inputDisabled, setInputDisabled] = useState(true)
	const handleLogin = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;


		console.log(email, password);
	};
	//for captcha related functionalities
	const captchaRef = useRef(null)
	const handleValidateCaptcha = () =>{
		 const captchaValue = captchaRef.current.value;

		 if (validateCaptcha(captchaValue)) {
				setInputDisabled(false)
			} else {
				setInputDisabled(true);
			}
	}
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col md:flex-row-reverse">
				<div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
					<form onSubmit={handleLogin} className="card-body">
						<fieldset className="fieldset">
							<label className="fieldset-label">Email</label>
							<input type="email" name="email" className="input" placeholder="Email" />
							<label className="fieldset-label">Password</label>
							<input type="password" name="password" className="input" placeholder="Password" />
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
							<input disabled={inputDisabled} type="submit" value="Login" className="btn btn-neutral mt-4" />
						</fieldset>
					</form>
				</div>
				<div className="text-center md:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
