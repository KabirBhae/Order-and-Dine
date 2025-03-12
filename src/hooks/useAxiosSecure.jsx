import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
	baseURL: "https://seventh-server.vercel.app",
});
const useAxiosSecure = () => {
	const { logoutUser } = useAuth();
	const navigate = useNavigate();

	// to add authorization header for every secure call to the api
	axiosSecure.interceptors.request.use(
		function (config) {
			const token = localStorage.getItem("access-token");
			config.headers.authorization = `Bearer ${token}`;
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);

	axiosSecure.interceptors.response.use(
		function (response) {
			return response;
		},
		async error => {
			const status = error.status;
			// for 401 or 403 logout the user and navigate to the login
			if (status === 401 || status === 403) {
				await logoutUser();
				navigate("/login");
			}
			return Promise.reject(error);
		}
	);

	return axiosSecure;
};

export default useAxiosSecure;
