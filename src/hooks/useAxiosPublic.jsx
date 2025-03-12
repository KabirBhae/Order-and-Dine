import axios from "axios";

const axiosPublic = axios.create({
	baseURL: "https://bistro-boss-server-kabir.vercel.app",
});
const useAxiosPublic = () => {
	return axiosPublic;
};

export default useAxiosPublic;
