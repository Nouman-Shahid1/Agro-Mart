const OrderCard = ({ orderId, status }) => (
    <li className="bg-white p-4 rounded-md shadow-md flex justify-between items-center hover:shadow-xl transition duration-200">
        <span className="text-gray-700">Order #{orderId}</span>
        <span
            className={`text-sm font-semibold ${status === "Delivered"
                    ? "text-green-600"
                    : status === "Processing"
                        ? "text-yellow-600"
                        : "text-gray-500"
                }`}
        >
            {status}
        </span>
    </li>
);
export default OrderCard;