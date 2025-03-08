import { createBrowserRouter, Navigate  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AddItems";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "",
				element: <Home></Home>,
			},
			{
				path: "menu",
				element: <Menu></Menu>,
			},
			{
				path: "order",
				element: <Navigate to={"/order/salads"}></Navigate>,
			},
			{
				path: "order/:category",
				element: (
					<PrivateRoute>
						<Order></Order>
					</PrivateRoute>
				),
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "signup",
				element: <Signup></Signup>,
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		children: [
			{
				path: "cart",
				element: <Cart></Cart>,
			},
			// admin routes
			{
				path: "users",
				element: (
					<AdminRoute>
						<AllUsers></AllUsers>
					</AdminRoute>
				),
			},
			{
				path: "addItems",
				element: (
					<AdminRoute>
						<AddItems></AddItems>
					</AdminRoute>
				),
			},
		],
	},
]);
 export default router;