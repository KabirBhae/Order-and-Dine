import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer';

const Main = () => {
	const location = useLocation();
	//if noHeaderFooter is true, then don't load navbar and footer
	const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
	return (
		<div>
			{!noHeaderFooter && <Navbar />}
			<Outlet></Outlet>
			{!noHeaderFooter && <Footer></Footer>}
		</div>
	);
};

export default Main;