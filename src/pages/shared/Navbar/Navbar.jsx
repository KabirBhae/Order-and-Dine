import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {
	const { user, logoutUser } = useAuth()
	const [isAdmin] = useAdmin();
	const [cart] = useCart();
	const handleLogout = () => {
		logoutUser()
			.then(() => {
				Swal.fire({
					position: "top",
					icon: "success",
					title: "Logged out successfully",
					showConfirmButton: false,
					timer: 1000,
				});
			})
			.catch(() => {
				Swal.fire({
					position: "top",
					icon: "warning",
					title: "Log out not successful",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};
	const navOptions = (
		<div className="flex items-center">
			<li>
				<NavLink to="/">Home </NavLink>
			</li>
			<li>
				<NavLink to="menu">Our Menu</NavLink>
			</li>
			<li>
				<NavLink to="order">Order Now</NavLink>
			</li>
			{user && isAdmin && (
				<li>
					<Link to="/dashboard/adminHome">Dashboard</Link>
				</li>
			)}
			<li>
				<NavLink to="/dashboard/cart">
					<button id="cart-badge" className="btn">
						<FaShoppingCart className="mr-1"></FaShoppingCart>
						<div className="badge badge-secondary">+{cart.length}</div>
					</button>
				</NavLink>
			</li>
			{user && user?.email ? (
				<li onClick={handleLogout} className="btn btn-ghost rounded-sm">
					Logout
				</li>
			) : (
				<li>
					<NavLink to="login">Login</NavLink>
				</li>
			)}
		</div>
	);
	return (
		<div className="navbar max-w-7xl fixed z-10 shadow-sm text-white custom-opacity">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
						</svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						{navOptions}
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost text-lg">
					Order and Dine
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navOptions}</ul>
			</div>
			<div className="navbar-end">
				{user?.displayName && <span> {user?.displayName.toUpperCase()}</span>}
				{user?.photoURL && <img className="w-10 h-10 object-cover ml-2" src={user.photoURL} alt="Profile Image" />}
			</div>
		</div>
	);
};

export default Navbar;
