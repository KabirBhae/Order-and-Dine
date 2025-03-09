import errorGif from "../assets/404.gif"
const ErrorPage = () => {
	return (
		<div className="mt-8 flex flex-col items-center justify-center gap-4">
			<h3 className="text-3xl text-black">Sorry! Page not found.</h3>
			<img src={errorGif} alt="" />
		</div>
	);
};

export default ErrorPage;
