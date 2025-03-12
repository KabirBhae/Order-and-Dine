import { createBrowserRouter, Navigate } from "react-router-dom";
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
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/updateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
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
		errorElement: <ErrorPage></ErrorPage>,
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
			{
				path: "payment",
				element: <Payment></Payment>,
			},
			{
				path: "paymentHistory",
				element: <PaymentHistory></PaymentHistory>,
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
			{
				path: "manageItems",
				element: (
					<AdminRoute>
						<ManageItems></ManageItems>
					</AdminRoute>
				),
			},
			{
				path: "updateItem/:id",
				element: (
					<AdminRoute>
						<UpdateItem></UpdateItem>
					</AdminRoute>
				),
				loader: ({ params }) => fetch(`https://bistro-boss-server-kabir.vercel.app/menu/${params.id}`),
			},
		],
	},
]);
export default router;
