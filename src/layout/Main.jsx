import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer';

const Main = () => {
    const location = useLocation();
    let isLogin;
    location.pathname.includes('login')? isLogin = true: isLogin = false
    return (
			<div>
				{!isLogin && <Navbar />}
				<Outlet></Outlet>
				{!isLogin && <Footer></Footer>}
			</div>
		);
};

export default Main;