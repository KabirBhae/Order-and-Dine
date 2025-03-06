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
		],
	},
]);
 export default router;