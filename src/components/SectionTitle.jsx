const SectionTitle = ({ heading, subHeading }) => {
	return (
		<div className="md:w-4/12 mx-auto text-center my-8">
			<p className="text-yellow-600 mb-2 cinzel-font">--- {subHeading} ---</p>
			<h3 className="text-3xl uppercase border-y-2 py-4 inter-font">{heading}</h3>
		</div>
	);
};

export default SectionTitle;
