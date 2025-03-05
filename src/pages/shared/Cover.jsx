import { Parallax } from "react-parallax";

const Cover = ({ bgImg, title, details }) => {
	return (
		<Parallax blur={{ min: -15, max: 15 }} bgImage={bgImg} bgImageAlt={title} strength={-200}>
			<div className="hero h-[500px]">
				<div className="hero-overlay"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
						{details && <p className="mb-5">{details}</p>}
					</div>
				</div>
			</div>
		</Parallax>
	);
};

export default Cover;
