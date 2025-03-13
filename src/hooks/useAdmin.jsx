import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
	const { user, loading } = useAuth();
	const axiosSecure = useAxiosSecure();
	const { data: isAdmin, isPending: isAdminLoading } = useQuery({
		queryKey: [user?.email, "isAdmin"],
		//so that the queryFn runs only when loading stage (of user) is over
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/admin/${user.email}`);
			return res.data?.admin;
		},
	});
	return [isAdmin, isAdminLoading];
};

export default useAdmin;
