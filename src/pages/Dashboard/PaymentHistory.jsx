import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();

	const { data: payments = [] } = useQuery({
		queryKey: ["payments", user.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/payments/${user.email}`);
			return res.data;
		},
	});

	return (
		<div>
			<h2 className="text-3xl inter-font">Total Payments: {payments.length}</h2>
			<div className="overflow-x-auto mt-6">
				<table className="table table-zebra">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Transaction ID</th>
							<th>price</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{payments.map((payment, index) => (
							<tr key={payment._id}>
								<th>{index + 1}</th>
								<td>{payment.transactionId}</td>
								<td>${payment.price.toFixed(2)}</td>
								<td>{payment.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PaymentHistory;
